import express from 'express';
import { getInfo } from '../controllers/infoController';

export function getInfoRouter() {
	const router = express.Router();

	router.get('/', getInfo);

	return router;
}
