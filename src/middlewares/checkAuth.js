const checkNoAuth = (req, res, next) => {
  if (res.locals.user) return res.redirect('/');
  return next();
};

export default checkNoAuth;
