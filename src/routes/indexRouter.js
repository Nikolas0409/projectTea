import { Router } from 'express';
import { Tea } from '../../db/models';

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

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const tea = await Tea.findByPk(id);
  res.render('TeaPage', { tea });
});

export default router;
