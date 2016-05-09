# Odd-Even System

> Angular 2 is still in **Release Candidate** stage, please **don't** use this in production
> Follow it [here](https://splintercode.github.io/is-angular-2-ready/)

## Table of Content
* [Introduction](#introduction)
* [Installation](#installation)
* [Start](#start)
* [Testing](#testing)
* [Production](#production)
* [Contributing](#contributing)
* [Special thanks](#special-thanks)
* [License](#license)

## Introduction
Welcome to Odd-Even System!
Odd–even System rationing is a method of rationing in which access to some resource is restricted to half the population on any given day.

This Web-App contains almost everything related to Angular 2 [Angular 2](https://angular.io/):
* [NPM](https://www.npmjs.com/) for package manager
* [TypeScript](http://www.typescriptlang.org/) for the base language
  * with [Typings](https://github.com/typings/typings) for TypeScript definition manager
* [Gulp](http://gulpjs.com/) for workflow (from *serve*, *watch*, *compile*, *test* to *build*)
* [Browsersync](https://www.browsersync.io/) for development server & reload capability
* [SystemJS](https://github.com/systemjs/systemjs) for module loader
* [Codelyzer](https://github.com/mgechev/codelyzer) for static code analyzer
* [Karma](http://karma-runner.github.io/) for test-runner
* [Jasmine](http://jasmine.github.io/) for test framework
* [Istanbul](https://github.com/gotwarlost/istanbul) for test coverage
  * with [Remap Istanbul](https://github.com/SitePen/remap-istanbul) for remapping Javascript to TypeScript coverage
* [SystemJS Builder](https://github.com/systemjs/builder) for module bundling in production


## Installation
Firstly, you need to have [Node.js](https://nodejs.org/en/)
- For v4, please use v4.3.x (LTS) or higher (**highly** recommended)
- For v5, please use v5.6.x or higher, here is [why](https://nodejs.org/en/blog/vulnerability/february-2016-security-releases/)

> You need v4.x or higher for [Protractor](https://angular.github.io/protractor/#/)

Then, install these packages globally:
```bash
npm install -g gulp
```

After that, just run:
```bash
npm install
```

## Start
Let's start up the server, run:
`gulp` or `gulp serve-dev`

and done! The browser will popup and you can start seeing this Web-App!
Every changes to the file will refresh the browser automatically
and it'll also compile your changed TypeScripts files to Javascript files.

## Testing
This starter comes with testing gulp workflow

### Unit testing
Just run
```bash
gulp test
```
and it'll compile all TypeScript files, start Karma, then remap Istanbul coverage so that it shows TypeScript coverage, not the transpiled Javascript coverage.
![Coverage result](http://s9.postimg.org/ij32cv5dr/test.png)

### E2E testing
Firstly start the server:
```
gulp serve-dev
```
To begin testing, run:
```bash
gulp e2e
```
and it'll compile all E2E spec files in `/test/e2e/*.spec.ts`, boot up Selenium server then launches Chrome browser.

## Production
> All build tasks will run the `gulp test`, the bundle will only be created if the test passed.

You can create production build by running:
```bash
gulp build
```
or you can create production build and then serve it using `live-server` by running:
```bash
gulp serve-build
```
It uses [SystemJS Builder](https://github.com/systemjs/builder) to bundle your application so it's ready for production use

## License
MIT
