exports.isLoggedIn = function (req, res, next, error) {
    if(req.user) {
      next();
    } else {
      next();
      // console.log(error);
      // return res.status(401).send('Access Denied');
    //   console.log(req.user);
    }
  }