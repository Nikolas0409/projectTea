import { Router } from 'express';
import { Tea } from '../../db/models';

const router = Router();

router.delete('/:id', async (req, res) => {
  try {
    await Tea.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
