import log4js from 'log4js';

const logger = log4js.getLogger('default');

logger.level = 'debug';
if (process.env.NODE_ENV === 'production') logger.level = 'error';

export function elementLog(...theArgs: Array<string | Error>) {
	let log = '';
	theArgs.forEach((element: string | Error) => {
		try {
			if (!(element instanceof Error)) {
				log += `${JSON.stringify(element)}\n`;
			} else {
				log += `${element}\n`;
			}
		} catch (e) {
			log += `${element}\n`;
		}
	});

	return log;
}

export function info(...theArgs: Array<string | Error>) {
	logger.info(elementLog(...theArgs));
}

export function warn(...theArgs: Array<string | Error>) {
	logger.warn(elementLog(...theArgs));
}

export function error(...theArgs: Array<string | Error>) {
	logger.error(elementLog(...theArgs));
}

export function debug(...theArgs: Array<string | Error>) {
	logger.debug(elementLog(...theArgs));
}

export function fatal(...theArgs: Array<string | Error>) {
	logger.fatal(elementLog(...theArgs));
}

export function trace(...theArgs: Array<string | Error>) {
	logger.trace(elementLog(...theArgs));
}
