import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import config from './config';
import * as logger from './log_setup';
import { getApiRouter } from './routers/apiRouter';

const app = express();
const port = process.env.PORT || config.PORT || 8000;
app.set('Secret', config.SECRET);

app.use(cookieParser());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', getApiRouter());
app.listen(port, () => {
	logger.debug(`Server listening on ${port}`);
});
