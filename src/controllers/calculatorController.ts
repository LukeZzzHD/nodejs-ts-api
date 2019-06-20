import express from 'express';

export function add(req: express.Request, res: express.Response) {
	let num1 = req.params.num1;
	let num2 = req.params.num2;
	let result = num1 + num2;

	res.status(200).json({
		ok: true,
		message: 'The two numbers were added successfuly.',
		data: {
			result,
		},
	});
}

export function subtract(req: express.Request, res: express.Response) {
	let num1 = req.params.num1;
	let num2 = req.params.num2;
	let result = num1 - num2;

	res.status(200).json({
		ok: true,
		message: 'The two numbers were subtracted successfuly.',
		data: {
			result,
		},
	});
}

export function multiply(req: express.Request, res: express.Response) {
	let num1 = req.params.num1;
	let num2 = req.params.num2;
	let result = num1 * num2;

	res.status(200).json({
		ok: true,
		message: 'The two numbers were multiplied successfuly.',
		data: {
			result,
		},
	});
}

export function divide(req: express.Request, res: express.Response) {
	let num1 = req.params.num1;
	let num2 = req.params.num2;
	let result = num1 / num2;

	res.status(200).json({
		ok: true,
		message: 'The two numbers were divided successfuly.',
		data: {
			result,
		},
	});
}
