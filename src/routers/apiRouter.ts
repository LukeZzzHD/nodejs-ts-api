import express from 'express';
import { getInfoRouter } from './infoRouter';
import { getCalculatorRouter } from './calculatorRouter';

export function getApiRouter() {
	const router = express.Router();

	router.use('/info', getInfoRouter());
	router.use('/calculator', getCalculatorRouter());

	return router;
}
