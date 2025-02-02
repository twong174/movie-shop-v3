const passport = require("passport");

const logout = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(400).json({ message: "You are not logged in!" });
  }

  req.logout(function (error) {
    if (error) return next(error);

    req.session.destroy(() => {
      res.clearCookie("connect.sid"); // Clears session cookie
      res.status(200).json({ message: "Logged out successfully" });
    });
  });
};

module.exports = { logout };
