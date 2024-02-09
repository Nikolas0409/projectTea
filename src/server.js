import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import jsxRender from './utils/jsxRender';
import resLocals from './middlewares/resLocals';
import indexRouter from './routes/render/indexRouter';
import authRouter from './routes/render/authRender';
import teaPageRouter from './routes/render/renderTeaRouter';
import apiAuthRouter from './routes/api/apiAuthRouter';
import apiRouter from './routes/api/apiRouter';

const PORT = process.env.PORT || 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components', 'pages'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(resLocals);

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/teaPage', teaPageRouter);
app.use('/api', apiAuthRouter);
app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
