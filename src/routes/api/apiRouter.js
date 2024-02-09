import { Router } from 'express';
import { Tea, User, Comment } from '../../../db/models';
import { verifyAccessToken } from '../../middlewares/verifyTokens';

const router = Router();

router.post('/add', async (req, res) => {
  const newTea = await Tea.create(req.body);
  res.json(newTea);
});

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

router.delete('/admin/:id', async (req, res) => {
  try {
    await Tea.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.delete('/teaPage/:id', async (req, res) => {
  try {
    await Comment.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.patch('/:id', async (req, res) => {
  console.log('-----', req.params);
  const {
    name, location, latitude, longitude, image, discription,
  } = req.body;
  const id = +req.params.id;
  const tea = await Tea.findOne({ where: { id } });
  tea.name = name;
  tea.location = location;
  tea.latitude = latitude;
  tea.longitude = longitude;
  tea.image = image;
  tea.discription = discription;
  await tea.save();
  res.sendStatus(200);
});

export default router;
