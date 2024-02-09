function isAdmin(req, res, next) {
  if (res.locals.user && res.locals.user.isAdmin === true) {
    next();
  } else {
    res.redirect('/');
  }
}

export default isAdmin;
