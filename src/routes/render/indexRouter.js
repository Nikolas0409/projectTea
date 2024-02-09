import { Router } from 'express';
import { Tea } from '../../../db/models';

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

export default router;