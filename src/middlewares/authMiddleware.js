const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(401).json({ error: "Unauthorized" });
  console.log("token | middleware ->", token);
  jwt.verify(token.split(" ")[1], process.env.JWT_AT, (err, user) => {
    if (err) return res.status(403).json({ error: "Forbidden" });
    req.user = user;
    next();
  });
};

module.exports = {
  authenticateToken,
};
