const login = (req, res, next) => { 
  passport.authenticated("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) { 
      res.status(401).json({authenticated: false, message: "User not found"});
    }
    
    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.json({authenticated: true, user});
    });
  }) (req, res, next);
};  

const logout = (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({message: "Error logging in"});
    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.json({authenticated: false, message: "Logged out"});
    })
  })
}

const authStatus = (req, res) => {
  if (req.isAuthenticated()) { 
    res.json({authenticated: true, user: req.user})
  } else {
    res.json({authenticated: false})
  }
};
module.exports = { logout, login, authStatus };
