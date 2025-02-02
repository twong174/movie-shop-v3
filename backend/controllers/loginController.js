const passport = require("passport");

const login = (req, res, next) => {
  passport.authenticate("local", (error, user) => {
    if (error) return next(error);
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    req.logIn(user, (error) => {
      if (error) return next(error);
      return res.json({message: "Logged in", user});
    });
  }) (req, res, next);
};

module.exports = {login}

