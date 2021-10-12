# git-clone-repos

> Clone multiple git repositories via shell command

## Install

```shell
npm i git-clone-repos
```

## Usage

```js
const clone = require("git-clone-repos");

async () => {
	const options = {
		repos: [
			"git@github.com:alex-page/alexpage.dev.git",
			"git@github.com:alex-page/harmonograph.art.git",
		],
		destination: "./.repo/",
	};

	await clone(options);
};
```

## API

### `clone({repos, destination, depth?, isTreeless?})`

**repos**

Type: `array`

Array of git repository URLs. can be HTTPS `https://github.com/alex-page/alexpage.dev.git` or SSH `git@github.com:alex-page/alexpage.dev.git`.

**destination**

Type: `string`

Set the destination for the cloned repositories.

**depth**

Type: `number`

The depth to clone the repository.

**isTreeless**

Type: `Boolean`

If the cloned repository is treeless `--filter=tree:0`.

## Related

**git-clone** https://www.npmjs.com/package/git-clone
