import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  const initState = { hello: 'world' };
  res.render('MainPage', initState);
});

router.get('/signup', (req, res) => {
  res.render('SignupPage');
});

router.get('/login', (req, res) => {
  res.render('LoginPage');
});

export default router;
