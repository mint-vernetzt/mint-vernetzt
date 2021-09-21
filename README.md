# MINTvernetzt

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## How to

### Set up Node.js

1. Install nvm ([Guide](https://github.com/nvm-sh/nvm#installing-and-updating))
2. Run `nvm use` in repository root

_Hint:_

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
3. You will be asked to enter the component name

_Hint:_

By passing arguments to the script call (e.g. `npm run create-react-app -- --name=<application name>`) you can pass e.g. the application name directly or override default properties.

### Website

For our website we are using Wordpress as backend and [Gatsby](https://www.gatsbyjs.com/) for static site generation.

#### Set up Wordpress locally and connect Gatsby

##### Option 1: DDEV and Bedrock _(recommended)_

We provide a WordPress installation set up with <a href="https://ddev.readthedocs.io/en/stable/" target="_blank">DDEV</a> and Roots' <a href="https://roots.io/bedrock/" target="_blank">Bedrock</a> in `apps/website-backend`. To run this setup you have to <a href="https://docs.docker.com/engine/install/" target="_blank">install docker</a> on your machine first. If docker is installed follow the <a href="https://ddev.readthedocs.io/en/latest/#installation" target="_blank">installation manual</a> provided by DDEV.

Next steps after installation:

- Run `ddev composer install` to install the dependencies
- Run `ddev wp plugin activate --all` to activate the installed WordPress plugins
- Create an `.env` in the backend root (`apps/website-backend`) an set all environment variables (`DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PREFIX`, `WP_ENV`, `WP_HOME`, `WP_SITE_URL`) (_Hint_: The values can be found in `apps/website-backend/wp-config-ddev.php`)
- Run `ddev launch` to open the site in your browser

##### Option 2: Local

1. An easy way to run Wordpress locally is using [Local](https://localwp.com/). Just follow the ["Getting Started" instruction](https://localwp.com/help-docs/getting-started/installing-local/) on their website and create your local Wordpress installation.
2. You have to install the following plugins to extend you Wordpress installation with GraphQL and make it accessible for Gatsby: _WPGatsby_ and _WP GraphQL_.
3. Create the files `.env.development` and `.env.production` in the website root (`apps/website`) and add the environment variable `CMS_URL` with the url of your local Wordpress installation (e.g. `CMS_URL=https://mywordpress.local/graphql`).

###### Troubleshooting

If you have trouble with the self signed certificate on you Mac while using Local follow this instruction: [Managing a Local site’s SSL certificate in macOS](https://localwp.com/help-docs/ssl/managing-local-sites-ssl-certificate-in-macos/).

If you get an error regarding the self signed certificate while running Gatsby follow this instruction: [Using self-signed certificates](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/tutorials/using-self-signed-certificates.md)

4. Now, if you run Wordpress and the website in parallel, Gatsby reads all data from the GraphQL-API.

#### commands

1. Run `npm run serve-website` to run the website for development
2. Run `npm run build-website` to create a production build of the website

If you run the website on this state of installation you will receive an error regarding custom fields we are using (e.g. Organization).

#### Enable Advanced Custom Fields for Gatsby

To provide custom content elements we are using "Advanced Custom Fields" (ACF).

- If you are using Local you have to install the following plugins: _Advanced Custom Fields_, _Custom Post Type UI_, and [_WPGraphQL for Advanced Custom Fields_](https://www.wpgraphql.com/acf/) (needs to be manually installed).
- Create a new Post Type in Wordpress (_CPT UI_ > _Add/Edit Post Types_).
- In the _Add/Edit Post Types_ View scroll down to the _WPGraphQL_ section and set _Show in GraphQL_ to `True` and activate the Taxonomies _Categories (WP Core)_ and _Tags (WP Core)_.
- Please create following post types to your Wordpress installation: _Organizations_.
- Now you can use the custom content type querying for `allWpSingularLabel` (e.g. `allWpOrganization`).

### Use Design System

![Design Build Status](https://github.com/mint-vernetzt/mint-vernetzt/workflows/Design%20System/badge.svg)

We are using [Storybook](https://storybook.js.org/) for our design system. If you want to use Storybook in your library please follow the instructions from the [Nx documentation](https://nx.dev/latest/react/storybook/overview#storybook).

[Here](https://design.mint-vernetzt.de/) you can find the current build of the design system.

#### commands

1. Run `npm run serve-design-system` to run the design system
2. Run `npm run build-design-system` to create a production build of the design system

### Write commit messages

We are using [AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits) to provide features like automatic changelog generation. To force this convention we are using the [Commitizen command line tool](https://github.com/commitizen/cz-cli). If you commit changes via `git commit` you'll be ask about scope, type, subject, etc. of the changes.
