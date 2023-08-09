const expressAsyncHandler = require("express-async-handler");
const VendorCredit = require("../../models/accountant/VendorCredit");

module.exports.createVendorCredit= expressAsyncHandler(async (req, res) => {
  const creditNoteNumber = await generateCreditNoteNumber(req.orgNumber);

  const vendorcredit = await VendorCredit.create({
    ...req.body,
    orgNumber: req.orgNumber,
    creditNoteNumber,
  });

  res.status(201).json({
    success: true,
    vendorcredit,
  });
});

module.exports.getAllCreditNote = expressAsyncHandler(async(req, res)=>{
  const vendorcredit = await VendorCredit.find({
    
    orgNumber: req.orgNumber,
  
  }).populate("vendorId");

  res.status(200).json({
    success: true,
    vendorcredit,
  })

})



module.exports.fetchBillCreditNote = expressAsyncHandler(async(req,res)=>{
  const bill = await VendorCredit.aggregate()
})

const generateCreditNoteNumber = async (orgNumber) => {
  const vendorcredit = await VendorCredit.find({ orgNumber })
    .sort({ creditNoteNumber: -1 })
    .limit(1)
    .lean();

  const number =
    vendorcredit.length > 0
      ? vendorcredit[0].creditNoteNumber.split("-")[1]
      : "000";

  let numberAsInt = parseInt(number, 10);
  let incrementedNumberAsInt = numberAsInt + 1;
  let incrementedNumberAsString = incrementedNumberAsInt.toString();
  let paddedIncrementedNumber = incrementedNumberAsString.padStart(
    number.length,
    "0"
  );

  const creditNoteNumber = `CN-${paddedIncrementedNumber}`;

  return creditNoteNumber;
};
