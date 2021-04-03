# git-clone-repos

> Clone multiple git repositories via shell command

## Install

```shell
npm i git-clone-repos
```

## Usage

```js
const clone = require('git-clone-repos');

(async() => {
  await clone([
    'git@github.com:alex-page/alexpage.com.au.git',
    'git@github.com:alex-page/harmonograph.art.git',
  ], './.repo/');
});
```

## API `clone(repos, destination)`

**repos**

Type: `array`

Array of git repository URLs. can be HTTPS `https://github.com/alex-page/alexpage.com.au.git` or SSH `git@github.com:alex-page/alexpage.com.au.git`.

**destination**

Type: `string`

Set the destination for the cloned repositories.

## Related

**git-clone** https://www.npmjs.com/package/git-clone
