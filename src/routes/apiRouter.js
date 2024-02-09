import { Router } from 'express';
import bcrypt from 'bcrypt';
import { User, Tea } from '../../db/models';
import generateTokens from '../utils/generateTokens';
import cookieConfig from '../config/cookiesConfig';

const router = Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!(name && email && password)) {
    return res.status(400).json({ message: 'Все поля должны быть заполнены' });
  }

  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: { name, password: await bcrypt.hash(password, 10) },
  });

  if (!created) return res.status(403).json({ message: 'Такой пользователь уже создан' });

  const plainUser = user.get();
  delete plainUser.password;

  const { access, refresh } = generateTokens({ user: plainUser });

  res
    .cookie('accessToken', access, cookieConfig.access)
    .cookie('refreshToken', refresh, cookieConfig.refresh)
    .sendStatus(200);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).json({ message: 'Все поля должны быть созданы' });
  }

  const user = await User.findOne({ where: { email } });

  if (!user) return res.status(403).json({ message: 'Пользователь не найден' });

  const correctPass = await bcrypt.compare(password, user.password);

  if (!correctPass) {
    return res.status(401).json({ message: 'Неправильный пароль' });
  }

  const plainUser = user.get();
  delete plainUser.password;

  const { accessToken, refreshToken } = generateTokens({ user: plainUser });

  res
    .cookie('accessToken', accessToken, cookieConfig.access)
    .cookie('refreshToken', refreshToken, cookieConfig.refresh)
    .sendStatus(200);
});

router.get('/logout', (req, res) => {
  res.clearCookie('accessToken').clearCookie('refreshToken').redirect('/');
});

router.post('/add', async (req, res) => {
  const newTea = await Tea.create(req.body);
  res.json(newTea);
});

router.patch('/:id', async (req, res) => {
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
