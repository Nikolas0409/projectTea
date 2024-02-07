import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = { hello: 'world' };
  res.render('MainPage', initState);
});

export default router;
