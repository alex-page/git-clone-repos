const test = require('ava');
const fs = require('fs/promises');
const clone = require('./dist/index.js');

const dest = './.repo/';

test.afterEach.always('cleanup', async () => {
	try {
		await fs.rmdir(dest, {recursive: true});
	} catch (error) {
		console.error(`Error on clean up: ${error}`);
	}
});

test('foo', async t => {
	try {
		await clone(['https://github.com/alex-page/alexpage.com.au.git'], dest);
		await fs.access(`${dest}alexpage.com.au/README.md`);
		t.pass();
	} catch {
		t.fail();
	}
});
