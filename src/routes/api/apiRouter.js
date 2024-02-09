import { Router } from 'express';
import { Tea, User, Comment } from '../../../db/models';
import { verifyAccessToken } from '../../middlewares/verifyTokens';

const router = Router();

router.post('/:id', verifyAccessToken, async (req, res) => {
  const { title } = req.body;
  const { id } = req.params;
  const newComment = await Comment.create({
    userId: res.locals.user.id,
    title,
    teaId: id,

  });
  const newCommentWithAuthor = await Comment.findOne({
    where: { id: newComment.id },
    include: User,
  });
  res.json(newCommentWithAuthor);
});

router.post('/add', async (req, res) => {
  const newTea = await Tea.create(req.body);
  res.json(newTea);
});

router.delete('/admin/:id', async (req, res) => {
  try {
    await Tea.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
