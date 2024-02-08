import { Router } from 'express';
import { Tea } from '../../db/models';

const router = Router();

router.get('/', async (req, res) => {
  const data = await Tea.findAll();
  const initState = { data };
  res.render('MainPage', initState);
});

router.get('/admin', async (req, res) => {
  const teas = await Tea.findAll();
  const initState = { teas };

  res.render('AdminPage', initState);
});

router.get('/signup', (req, res) => {
  res.render('SignupPage');
});

router.get('/login', (req, res) => {
  res.render('LoginPage');
});

// router.get('*', (req, res) => {
//   res.redirect('/');
// });

export default router;
