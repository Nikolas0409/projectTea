import express from 'express';
import { Tea, User, Comment } from '../../db/models';
import { verifyAccessToken } from '../middlewares/verifyTokens';

const teaRouter = express.Router();

teaRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const tea = await Tea.findByPk(id);
  const commentByTeaId = await Comment.findAll({
    where: { teaId: id },
    include: User,
  });
  const users = await User.findAll();
  res.render('TeaPage', { tea, commentByTeaId, users });
});

teaRouter.post('/:id', verifyAccessToken, async (req, res) => {
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

export default teaRouter;
