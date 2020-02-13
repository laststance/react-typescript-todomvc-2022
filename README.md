# React TypeScript Todo Example 2020 [![Netlify Status](https://api.netlify.com/api/v1/badges/94ad28c3-2ccd-40b2-9b9f-35ab89148f43/deploy-status)](https://app.netlify.com/sites/react-typescript-todo-example/deploys)

[![CircleCI](https://circleci.com/gh/laststance/react-typescript-todo-example-2020.svg?style=svg)](https://circleci.com/gh/laststance/react-typescript-todo-example-2020)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/laststance/react-typescript-todo-example-2020)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)
[![Depfu](https://badges.depfu.com/badges/b291947c58892a6d78e4f3374c4a6d01/overview.svg)](https://depfu.com/github/ryota-murakami/react-typescript-todo-example-2020?project_id=9618)

 <a href="https://react-typescript-todo-example.netlify.com/"><img src="https://raw.githubusercontent.com/laststance/react-typescript-todo-example-2020/master/img.pnghttps://raw.githubusercontent.com/laststance/react-typescript-todo-example-2020/master/images/todolist.gif" alt="gif"></a>

## Thank you for over 80 stars!✨🤩🎉
I created this repository july 2019 because I can't Create React App + TypeScript + implemented by modern favor React(like hooks.)  

Today I'm glad to many forks visiting the repo everyday more than I expected. So I want to continue to implove as a latest React TypeScript Todo Example.  
Now project was renamed 2019 to **react-typescript-todo-example-2020** 😆🎄✨ (2/11 2020)
 
React + TypeScript conbination has growing to vast majolity doday, so I hope to show example tested web app mainly beginner developer.    

Thank you so much visit here & several awesome contributors!  
have a good day! 😀⭐️

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [What's this?](#whats-this)
  - [How to the project was bootstrapped?](#how-to-the-project-was-bootstrapped)
      - [1. Execute command for scaffold Create React App's TypeScript Templete.](#1-execute-command-for-scaffold-create-react-apps-typescript-templete)
      - [2. Setup, Setting, Programing hard with below stuffs 😆](#2-setup-setting-programing-hard-with-below-stuffs-)
- [Stack](#stack)
  - [😀Motivation](#motivation)
  - [🗒 Note](#%F0%9F%97%92-note)
- [Installation](#installation)
  - [🔧Prerequisites](#prerequisites)
  - [📝 Editor](#-editor)
- [Run Webpack Dev Server](#run-webpack-dev-server)
- [Run Production Build](#run-production-build)
- [Cypress](#cypress)
    - [Runs Cypress tests from the CLI without the GUI](#runs-cypress-tests-from-the-cli-without-the-gui)
    - [Opens Cypress in the interactive GUI](#opens-cypress-in-the-interactive-gui)
- [Jest](#jest)
- [Linting](#linting)
- [Typecheck](#typecheck)
- [Issues](#issues)
- [Questions](#questions)
- [LICENSE](#license)
- [Contributors](#contributors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## What's this?
This is a [Create React App](https://facebook.github.io/create-react-app/) based [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) todo app example.  👉 [**Deployed App**](https://react-typescript-todo-example.netlify.com)  
[TypeScript](https://www.typescriptlang.org/) coming from babel, set upped at [Create React App](https://facebook.github.io/create-react-app/) install option. [Adding TypeScript Doc](https://facebook.github.io/create-react-app/docs/adding-typescript#docsNav) 📝 

### How to the project was bootstrapped?

##### 1. Execute command for scaffold [Create React App's TypeScript Templete](https://create-react-app.dev/docs/getting-started#creating-a-typescript-app).

```
npx create-react-app react-typescript-todo-example-2020 --template typescript
```
##### 2. Setup, Setting, Programing hard with below stuffs 😆

## Stack
- [TODO-CSS-Template](https://github.com/Klerith/TODO-CSS-Template)(Borrowing HTML & CSS Thanks! 👍 )
- [Create React App](https://facebook.github.io/create-react-app/) [v3.3.1](https://github.com/facebook/create-react-app/releases/tag/v3.3.1)
- [TypeScript(Babel)](https://babeljs.io/docs/en/babel-plugin-transform-typescript)
- [ReachRouter](https://github.com/reach/router)
- [emotion](https://github.com/emotion-js/emotion): CSS-in-JS
- [use-app-state](https://github.com/laststance/use-app-state): Simple Context Store
- [Cypress](https://www.cypress.io/): E2E Testing
- [Percy](https://percy.io/): Visual Testing
- [react-testing-library](https://github.com/testing-library/react-testing-library)
- [ESLint](https://eslint.org/)
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
  - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint#readme)
  - [eslint-plugin-react-hooks](https://reactjs.org/)
- [Netlify](https://www.netlify.com/): Deploy & Hosting
- [CircleCI](https://circleci.com/): Automation run tests, lint, typecheck, build, deploy
- [Depfu](https://depfu.com/github/ryota-murakami/react-typescript-todo-example-2020?project_id=9618): Keep latest npm packages(React, TypeScript etc) automaticaly

### 😀 Motivation
Aftter React Conf 2018, It comming v16.8.0 with [Hooks](https://reactjs.org/docs/hooks-intro.html) that's apparently brand new way of Code Design contrast with class base 📝
In addition, TypeScript adopt so much easier into a `babel` + `webpack` build system by [Create React App v2.1 TypeScript support](https://github.com/facebook/create-react-app/releases/tag/v2.1.0) official released.

So I was interested what kind of code design and configuration was built. if I build todo with a Hooks and TypeScript. 😀

### 🗒 Note

**This is not a Best Practice introduction.  
There are tons of effective way to create solid software in JavaScript World, you have a lot of other option based on your preference for approaching where, The Repo is just a style of my favorite.**  

"*How to combining TypeScript with massive Babel or JavaScript tools ecosystem?*"

**I hope this helps you know like that from what I've Published!**




## Installation

### 🔧Prerequisites

- The app assumed installed `Node.js` newer than `10.16.3 LTS`.
If you have not it yet, follow the official [Node.js Doc](https://nodejs.org/en/) to install it.

And then clone repo and install npm dependencies.  
Intall is complete.

```bash
git clone git@github.com:laststance/react-typescript-todo-example-2020.git
cd react-typescript-todo-example-2020
yarn install # or npm install
```

After that you can lunch App with 'yarn start' command. 😎

### 📝 Editor
If you're going to code reading for learn, I recommend you [VScode](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/webstorm/).  
Those editor has buit-in TypeScript supprt so code jumping woring as well.  

But if you using Vim, there is great post for setup [Vim for TypeScript and React in 2020](https://medium.com/@vanuan/vim-for-typescript-and-react-in-2020-9724b9139be2).  
Written by [Vanya Yani](https://medium.com/@vanuan). 🤗


## CLI commands

### Run Webpack Dev Server

```bash
yarn start
```

After that you'll seen the console which are server processes messages.  
Let's follow the message and put in URL `http://localhost:3000/` your browsers adressbar,   
and then you'll got todo app as same as Demo. let's modify under the `src/` code feel free!!

Official Docs: https://create-react-app.dev/docs/getting-started#npm-start-or-yarn-start

### Run Production Build

```bash
yarn build
```

After that You'll get bundled and optimization stuff in `build` directory.  
Also you can run production build with `serve` local webserver modules.  

```bash
yarn global add serve
serve -s build
```

Official Docs: https://create-react-app.dev/docs/getting-started#npm-run-build-or-yarn-build

### Cypress
[Cypress](https://www.cypress.io/) is all-in-one E2E Testing tool which can deal real browser testing.  

![cypress_open](images/cypress_open.gif)

#### Runs Cypress tests from the CLI without the GUI

```bash
yarn start # Launch DevServer
yarn cypress:run
```

#### Opens Cypress in the interactive GUI

```bash
yarn start # Launch DevServer
yarn cypress:open
```

When you run or open cypress, also run a [Percy](https://percy.io/).  
Percy is awesome visual regression testing service.   
That detect visual diff each page, and then we'll check on web console "is that visual change expected?"   

Cypress and Percy combination is really effective for website/webapp!  
This projects Percy console is this: https://percy.io/laststance/react-typescript-todo-example-2020


### Jest
[Jest](https://jestjs.io/) is all-in-one test-runner built in [Create React App](https://facebook.github.io/create-react-app/) and covers function-level unit testing to component-behavior-level integration testing.  
The Repo use to [react-testing-library](https://github.com/testing-library/react-testing-library) for component integration testing.

```bash
# run jest
yarn test
# run jest with hide console message except jest infomation
yarn test --silent
```

### Linting
[ESLint](https://eslint.org/) is at the top.  
And setup [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint), mixing [Prettier](https://prettier.io/) as a [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier).

```bash
# run lint only
yarn lint

# run wtih eslint --fix option
yarn lint:fix
```

### Typecheck
While developing and building, Babel stop transpile with TS error messages.  
I can't find way static typecheck with babel,  
so I'm using original TypeScript via npm and specified `tsc --noEmit` compile option that doesn't generate compiled code.  

```bash
yarn typecheck
```

## Issues
Please feel free to post [New Issue](https://github.com/ryota-murakami/react-typescript-todo-example-2020/issues/new) or Pull Request 🤗

## Questions
Please feel free to post [New Issue](https://github.com/ryota-murakami/react-typescript-todo-example-2020/issues/new) or reply on [Twitter](https://twitter.com/malloc007) 🐦  

If you want to get more generally answers, these community are might be helpful 🍻

- [Spectrum](https://spectrum.chat/react?tab=posts)
- [Reactiflux on Discord](https://www.reactiflux.com/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs)

## LICENSE
MIT

## Contributors
Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://ryota-murakami.github.io/"><img src="https://avatars1.githubusercontent.com/u/5501268?s=400&u=7bf6b1580b95930980af2588ef0057f3e9ec1ff8&v=4" width="100px;" alt=""/><br /><sub><b>ryota-murakami</b></sub></a><br /><a href="https://github.com/ryota-murakami/react-typescript-todo-example-2020/commits?author=ryota-murakami" title="Code">💻</a> <a href="https://github.com/ryota-murakami/react-typescript-todo-example-2020/commits?author=ryota-murakami" title="Documentation">📖</a> <a href="https://github.com/ryota-murakami/react-typescript-todo-example-2020/commits?author=ryota-murakami" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://donkeycar.com"><img src="https://avatars2.githubusercontent.com/u/147582?v=4" width="100px;" alt=""/><br /><sub><b>Will Roscoe</b></sub></a><br /><a href="https://github.com/ryota-murakami/react-typescript-todo-example-2020/commits?author=wroscoe" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/JunQu"><img src="https://avatars2.githubusercontent.com/u/39846309?v=4" width="100px;" alt=""/><br /><sub><b>Peng Fei</b></sub></a><br /><a href="https://github.com/ryota-murakami/react-typescript-todo-example-2020/issues?q=author%3AJunQu" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
