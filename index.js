const fs = require('fs/promises');
const {promisify} = require('util');
const exec = promisify(require('child_process').exec);

module.exports = async (repos, destination) => {
	try {
		await fs.mkdir(destination, {recursive: true});
		const cloneRepos = repos.map(repo =>
			exec(`git clone --depth 1 ${repo}`, {cwd: destination})
		);

		await Promise.all(cloneRepos);
	} catch (error) {
		throw new Error(`Clone failed ${error.message}`);
	}
};
