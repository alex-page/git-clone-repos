import {promises as fs} from 'fs';
import {promisify} from 'util';
import {exec} from 'child_process';

const clone = async (repos: string[], destination: string) => {
	try {
		await fs.mkdir(destination, {recursive: true});
		const cloneRepos = repos.map(async repo =>
			promisify(exec)(`git clone --depth 1 ${repo}`, {cwd: destination})
		);

		await Promise.all(cloneRepos);
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new TypeError(`Clone failed ${error.message}`);
		} else if (typeof error === 'string') {
			throw new TypeError(error);
		}
	}
};

export default clone;
