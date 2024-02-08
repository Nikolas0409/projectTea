import express from 'express';
import { Tea, User } from '../../db/models';
import { verifyAccessToken } from '../middlewares/verifyTokens';

const teaRouter = express.Router();

teaRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const tea = await Tea.findByPk(id);
  res.render('TeaPage', { tea });
});

teaRouter.post('/:id', verifyAccessToken, async (req, res) => {
  const newComment = await Comment.create({
    ...req.body,
    userId: res.locals.user.id,
  });
  const newCommentWithAuthor = await Comment.findOne({
    where: { id: newComment.id },
    include: User,
  });
  res.json(newCommentWithAuthor);
});

export default teaRouter;
