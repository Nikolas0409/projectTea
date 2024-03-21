import { Router } from 'express';
import { Tea, User, Comment } from '../../../db/models';

const teaPageRouter = Router();

teaPageRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (Number.isNaN(+id)) {
    return res.redirect('/');
  }
  const tea = await Tea.findByPk(id);
  const commentByTeaId = await Comment.findAll({
    where: { teaId: id },
    include: User,
  });
  console.log(commentByTeaId);
  const users = await User.findAll();
  res.render('TeaPage', { tea, commentByTeaId, users });
});

export default teaPageRouter;
