import { Router } from 'express';
import { Tea } from '../../../db/models';

const teaPageRouter = Router();

teaPageRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const tea = await Tea.findByPk(id);
  res.render('TeaPage', { tea });
});

export default teaPageRouter;
