const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
var cookieParser = require("cookie-parser");
const allRoutes = require("./routes");
const path = require("path");
const app = express();

const http = require('http');


const server = http.createServer(app);




const { accessibleRecordsPlugin } = require("@casl/mongoose");
const morgan = require("morgan");
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));



app.use("/api", allRoutes);

// app.use("/Public", express.static("Public"));



// var __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "/dist")));
// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "/dist/index.html"))
// );


async function main() {
  await mongoose.connect(

    "mongodb+srv://SUDHANSHU:Sudh2002@cluster0.6wqffyv.mongodb.net/searchmyclg"
    ,{ useNewUrlParser: true, useUnifiedTopology: true }

  );


  mongoose.plugin(accessibleRecordsPlugin);
  
  server.listen(process.env.PORT, () => {
    console.log(`Server running on port`, process.env.PORT);
  });

  
}
main();