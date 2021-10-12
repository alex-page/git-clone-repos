const test = require("ava");
const fs = require("fs/promises");
const clone = require("./dist/index.js");

const destination = "./.repo/";

test.afterEach.always("cleanup", async () => {
	try {
		await fs.rmdir(destination, { recursive: true });
	} catch (error) {
		console.error(`Error on clean up: ${error}`);
	}
});

test("clone repo", async (t) => {
	try {
		const options = {
			repos: ["https://github.com/alex-page/alexpage.dev.git"],
			destination,
		};
		await clone(options);
		await fs.access(`${destination}alexpage.dev/README.md`);
		t.pass();
	} catch {
		t.fail();
	}
});
