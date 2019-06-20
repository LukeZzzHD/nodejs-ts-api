import express from 'express';

export function getInfo(req: express.Request, res: express.Response) {
	res.status(200).json({
		ok: true,
		message: 'You reached the info endpoint. This API is used only for learning purposes',
	});
}
