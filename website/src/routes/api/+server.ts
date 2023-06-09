// imports
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import os from 'os';
import { version as appVersion } from '../../../package.json';
import { version as svelteKitVersion } from '@sveltejs/kit/package.json';
import { version as prismaV } from '@prisma/client/package.json';

// GET /api
export const GET = (async () => {
	// get data
	const uptime = os.uptime();
	const totalMemory = os.totalmem();
	const freeMemory = os.freemem();
	const currentTime = new Date().toISOString();

	const data: any = {
		uptime: msToTime(uptime),
		machine: os.type(),
		totalMemory: formatBytes(totalMemory),
		freeMemory: formatBytes(freeMemory),
		version: appVersion,
		currentTime: currentTime,
		svelteKitVersion: svelteKitVersion,
		prismaClientVersion: prismaV
	};

	return json(data);
}) satisfies RequestHandler;

/* helper functions */
function formatBytes(bytes: number): string {
	const units = ['B', 'KB', 'MB', 'GB', 'TB'];

	if (bytes === 0) {
		return '0 B';
	}

	const i = Math.floor(Math.log(bytes) / Math.log(1024));

	return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${units[i]}`;
}
function msToTime(ms: number) {
	const seconds = (ms / 1000).toFixed(1);
	const minutes = (ms / (1000 * 60)).toFixed(1);
	const hours = (ms / (1000 * 60 * 60)).toFixed(1);
	const days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
	if (Number(seconds) < 60) return seconds + ' Sec';
	else if (Number(minutes) < 60) return minutes + ' Min';
	else if (Number(hours) < 24) return hours + ' Hrs';
	else return days + ' Days';
}
