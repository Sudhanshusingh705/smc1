module.exports.checkPermission = (action, subject, conditions = "") => {
  return (req, res, next) => {
    if (req.ability.can(action, subject, conditions)) {
      next();
    } else {
      res
        .status(403)
        .json({ message: `You are not authorized to ${action} ${subject}` });
    }
  };
};
