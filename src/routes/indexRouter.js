import express from 'express';
import { Tea } from '../../db/models';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  const initState = { hello: 'world' };
  res.render('IndexPage', initState);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const tea = await Tea.findByPk(id);
  res.render('TeaPage', { tea });
});

export default router;
