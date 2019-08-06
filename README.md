# React TypeScript Todo Example 2019 Mid

[![CircleCI](https://circleci.com/gh/ryota-murakami/react-typescript-todo-example-2019.svg?style=svg)](https://circleci.com/gh/ryota-murakami/react-typescript-todo-example-2019) [![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) 
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)
[![Netlify Status](https://api.netlify.com/api/v1/badges/94ad28c3-2ccd-40b2-9b9f-35ab89148f43/deploy-status)](https://app.netlify.com/sites/react-typescript-todo-example/deploys)

 <a href="https://react-typescript-todo-example.netlify.com/"><img src="https://raw.githubusercontent.com/ryota-murakami/react-typescript-todo-example-2019/master/img.pnghttps://raw.githubusercontent.com/ryota-murakami/react-typescript-todo-example-2019/master/img.png" alt="top image"></a>

[![Edit react-typescript-todo-example-2019](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/ryota-murakami/react-typescript-todo-example-2019/tree/master/?fontsize=14)

## What's this?
This is a [Create React App](https://facebook.github.io/create-react-app/) based [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) todo app example.  👉 [**DEMO**](https://react-typescript-todo-example.netlify.com)  
[TypeScript](https://www.typescriptlang.org/) coming from babel, set upped at [Create React App](https://facebook.github.io/create-react-app/) install option. 📝[Adding TypeScript Doc](https://facebook.github.io/create-react-app/docs/adding-typescript#docsNav)  

**This is not a Best Practice introduction.  
There are tons of effective way to create solid software in JavaScript World, you have a lot of other option based on your preference for approaching where, The Repo is just a style of my favorite.**  

"*How to combining TypeScript with massive Babel or JavaScript tools ecosystem?*"

**I hope this helps you know like that from what I've Published!**

## Stack
- [TODO-CSS-Template](https://github.com/Klerith/TODO-CSS-Template)(Borrowing HTML & CSS Thanks! 👍 )
- [Create React App](https://facebook.github.io/create-react-app/)(ejected for remove eslint-lordar from webpack)
- [TypeScript(Babel)](https://babeljs.io/docs/en/babel-plugin-transform-typescript)
- [ReachRouter](https://github.com/reach/router)
- [emotion](https://github.com/emotion-js/emotion)
- [muriatic](https://github.com/ryota-murakami/muriatic)
- [cypress](https://www.cypress.io/)
- [react-testing-library](https://github.com/testing-library/react-testing-library)
- [ESLint](https://eslint.org/)
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
  - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint#readme)
  - [eslint-plugin-react-hooks](https://reactjs.org/)

## Motivation
Aftter React Conf 2018, It comming v16.8.0 with [Hooks](https://reactjs.org/docs/hooks-intro.html) that's apparently brand new way of Code Design contrast with class base 📝  
In addition, TypeScript adopt so much easier into a `babel` + 'webpack' build system by [Create React App v2.1 TypeScript support](https://github.com/facebook/create-react-app/releases/tag/v2.1.0) official released.

So I was interested what kind of code design and configuration is. if I build todo with a Hooks and TypeScript. 😀

## Install on your Local
```
git clone git@github.com:ryota-murakami/react-typescript-todo-example-2019.git
cd react-typescript-todo-example-2019
yarn install
```

## Launch DevServer
```bash
yarn start
```

## Build
```bash
yarn build
```

After that You'll get bundled stuff in `build` directory.

## cypress
[cypress](https://www.cypress.io/) is all-in-one E2E Testing tool which can deal real browser testing.  

#### Runs Cypress tests from the CLI without the GUI
```baash
yarn start # Launch DevServer
yarn cypress:run
```

#### Opens Cypress in the interactive GUI.

```bash
yarn start # Launch DevServer
yarn cypress:open
```

## Jest
[Jest](https://jestjs.io/) is all-in-one test-runner built in [Create React App](https://facebook.github.io/create-react-app/) and covers function-level unit testing to component-behavior-level integration testing.  
The Repo use to [react-testing-library](https://github.com/testing-library/react-testing-library) for component integration testing.

```bash
yarn test
```

*or*

```bash
yarn test --silent
```

If you run `yarn test`, you'll see console.error message on termianl because `ErrorBoundary.test.js` contain invalid react component on purpose.  
`--silent` option hide that error.

## Linting
[ESLint](https://eslint.org/) is at the top.  
And setup [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint), mixing [Prettier](https://prettier.io/) as a [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier).

```bash
yarn lint
```

*or*

``` bash
yarn lint:fix # run wtih eslint --fix option
```

## Typecheck
While developing and building, Babel stop transpile with TS error messages.  
I can't find way static typecheck with babel,  
so I'm using original TypeScript via npm and specified `tsc --noEmit` compile option that doesn't generate compiled code.  

```bash
yarn typecheck
```

## Issues
Please feel free to post [New Issue](https://github.com/ryota-murakami/react-typescript-todo-example-2019/issues/new) or Pull Request 🤗

## Questions
Please feel free to post [New Issue](https://github.com/ryota-murakami/react-typescript-todo-example-2019/issues/new) or reply on [Twitter](https://twitter.com/malloc007) 🐦  

If you want to get more generally answers, these community are might be helpful 🍻

- [Spectrum](https://spectrum.chat/react?tab=posts)
- [Reactiflux on Discord](https://www.reactiflux.com/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs)

## LICENSE
MIT

## Contributors ✨
Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://ryota-murakami.github.io/"><img src="https://avatars1.githubusercontent.com/u/5501268?s=400&u=7bf6b1580b95930980af2588ef0057f3e9ec1ff8&v=4" width="100px;" alt="ryota-murakami"/><br /><sub><b>ryota-murakami</b></sub></a><br /><a href="https://github.com/ryota-murakami/react-typescript-todo-example-2019/commits?author=ryota-murakami" title="Code">💻</a> <a href="https://github.com/ryota-murakami/react-typescript-todo-example-2019/commits?author=ryota-murakami" title="Documentation">📖</a> <a href="https://github.com/ryota-murakami/react-typescript-todo-example-2019/commits?author=ryota-murakami" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://donkeycar.com"><img src="https://avatars2.githubusercontent.com/u/147582?v=4" width="100px;" alt="Will Roscoe"/><br /><sub><b>Will Roscoe</b></sub></a><br /><a href="https://github.com/ryota-murakami/react-typescript-todo-example-2019/commits?author=wroscoe" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
