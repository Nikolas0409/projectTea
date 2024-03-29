import { Router } from 'express';
import { Tea } from '../../../db/models';
import checkAuth from '../../middlewares/checkAuth';

const router = Router();

router.get('/', async (req, res) => {
  const data = await Tea.findAll();
  const initState = { data };
  res.render('MainPage', initState);
});

router.get('/admin', checkAuth, async (req, res) => {
  const teas = await Tea.findAll();
  const initState = { teas };
  res.render('AdminPage', initState);
});

router.get('/edit/:id', checkAuth, async (req, res) => {
  const { id } = +req.params;
  const tea = await Tea.findOne({ where: id });
  res.render('EditTeaPage', { tea });
});

export default router;
