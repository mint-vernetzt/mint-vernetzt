# MINTvernetzt

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## How to

### Set up Node.js

1. Install nvm ([Guide](https://github.com/nvm-sh/nvm#installing-and-updating))
2. Run `nvm use` in repository root

*Hint:*

If you can read something like `You need to run "nvm install v16.5.0" to install it before using it.` run `nvm install v16.5.0`. 😎

### Create

We are using [Nx](https://nx.dev/) to scaffold applications, services, libraries, etc. For easy use we provide some scripts but you can also use the [Nx Console Plugin](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) for VSCode.
#### [React App](https://nx.dev/latest/react/react/application#nrwlreactapplication)

1. Run `npm run create-react-app`
2. You will be asked to enter the application name

#### [React Library](https://nx.dev/latest/react/react/library#nrwlreactlibrary)

Run `npm run create-react-lib -- --name=<application name> --importPath=<import path>` (`import path` looks like `@mint-vernetzt/react-components`)
#### [React Component](https://nx.dev/latest/react/react/library#nrwlreactlibrary)

##### for Library

1. Run `npm run create-react-lib-component`
2. You will be asked to enter the project name
3. You will be asked to enter the application name

*Hint:*

By passing arguments to the script call (e.g. `npm run create-react-app -- --name=<application name>`) you can pass e.g. the application name directly or override default properties.

### Write commit messages

We are using [AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits) to provide features like automatic changelog generation. To force this convention we are using the [Commitizen command line tool](https://github.com/commitizen/cz-cli). If you commit changes via `git commit` you'll be ask about scope, type, subject, etc. of the changes.
