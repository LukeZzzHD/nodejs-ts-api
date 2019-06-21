import express from 'express';

export function add(req: express.Request, res: express.Response) {
	let num1 = Number(req.params.num1);
	let num2 = Number(req.params.num2);
	let result = num1 + num2;

	res.status(200).json({
		ok: true,
		data: {
			result,
		},
	});
}

export function subtract(req: express.Request, res: express.Response) {
	let num1 = Number(req.params.num1);
	let num2 = Number(req.params.num2);
	let result = num1 - num2;

	res.status(200).json({
		ok: true,
		data: {
			result,
		},
	});
}

export function multiply(req: express.Request, res: express.Response) {
	let num1 = Number(req.params.num1);
	let num2 = Number(req.params.num2);
	let result = num1 * num2;

	res.status(200).json({
		ok: true,
		data: {
			result,
		},
	});
}

export function divide(req: express.Request, res: express.Response) {
	let num1 = Number(req.params.num1);
	let num2 = Number(req.params.num2);
	let result = num1 / num2;

	res.status(200).json({
		ok: true,
		data: {
			result,
		},
	});
}
