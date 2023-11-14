const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { HTTP_STATUS, SERVER } = require("../constants");

const authController = {
  async login(req, res) {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username, password });

      if (!user) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      const accessToken = jwt.sign(
        { username: user.username },
        process.env.JWT_AT,
        {
          expiresIn: "365d",
        }
      );
      console.log(" process.env.JWT_AT ->", process.env.JWT_AT);
      console.log("accessToken | Login ->", accessToken);
      res.json({ accessToken });
    } catch (error) {
      if (!SERVER.__PROD__) {
        console.log(`[ERROR] ${error}`);
      }

      return res.status(HTTP_STATUS.SERVER).json({
        success: false,
        message: "SERVER",
      });
    }
  },
};

module.exports = authController;
