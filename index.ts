import {promises as fs} from 'fs';
import {promisify} from 'util';
import {exec} from 'child_process';

interface Options {
	repos: string[];
	destination: string;
	depth?: number;
	isTreeless?: boolean;
}

const clone = async ({
	repos,
	destination,
	depth = 1,
	isTreeless = false
}: Options) => {
	try {
		await fs.mkdir(destination, {recursive: true});
		const treeless = isTreeless ? '--filter=tree:0' : '';
		const cloneRepos = repos.map(async repo =>
			promisify(exec)(`git clone --depth=${depth} ${treeless} ${repo}`, {cwd: destination})
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
