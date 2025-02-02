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

module.exports = { logout, login };
