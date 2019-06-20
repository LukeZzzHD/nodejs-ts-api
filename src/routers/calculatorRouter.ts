import express from 'express';
import { add, subtract, multiply, divide } from '../controllers/calculatorController';

export function getCalculatorRouter() {
	const router = express.Router();

	router.get('/add/:num1/:num2', add);
	router.get('subtract/:num1/:num2', subtract);
	router.get('/multiply/:num1/:num2', multiply);
	router.get('/divide/:num1/:num2', divide);

	return router;
}
