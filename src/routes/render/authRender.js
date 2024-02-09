import { Router } from 'express';

const router = Router();

router.get('/login', (req, res) => {
  res.render('LoginPage');
});

router.get('/signup', (req, res) => {
  res.render('SignupPage');
});

export default router;
