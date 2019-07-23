# React TypeScript Todo Example 2019

[![CircleCI](https://circleci.com/gh/ryota-murakami/react-typescript-todo-example-2019.svg?style=svg)](https://circleci.com/gh/ryota-murakami/react-typescript-todo-example-2019) [![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) 
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![Netlify Status](https://api.netlify.com/api/v1/badges/94ad28c3-2ccd-40b2-9b9f-35ab89148f43/deploy-status)](https://app.netlify.com/sites/react-typescript-todo-example/deploys)

 <a href="https://react-typescript-todo-example.netlify.com/"><img src="https://raw.githubusercontent.com/ryota-murakami/react-typescript-todo-example-2019/master/img.pnghttps://raw.githubusercontent.com/ryota-murakami/react-typescript-todo-example-2019/master/img.png" alt="top image"></a>

[![Edit react-typescript-todo-example-2019](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/ryota-murakami/react-typescript-todo-example-2019/tree/master/?fontsize=14)

## What's this?
This is a [Create React App](https://facebook.github.io/create-react-app/) based [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) todo app example. [DEMO](https://react-typescript-todo-example.netlify.com)  
That was added TypeScript at install CRA. [Adding TypeScript Doc](https://facebook.github.io/create-react-app/docs/adding-typescript#docsNav)


## Stack
- [Create React App](https://facebook.github.io/create-react-app/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TODO-CSS-Template](https://github.com/Klerith/TODO-CSS-Template)(Brrowing HTML & CSS Thanks! 👍 )
- [muriatic](https://github.com/ryota-murakami/muriatic)
- [emotion](https://github.com/emotion-js/emotion)
- [Cypress](https://www.cypress.io/)
- [react-testing-library](https://github.com/testing-library/react-testing-library)

## Motivation
Aftter React Conf 2018, It comming v16.8.0 with [Hooks](https://reactjs.org/docs/hooks-intro.html) that's apparently brand new way of Code Design 📝  
Additionally, TypeScript adopt so much easier into a `babel` + 'webpack' build system by [Create React App v2.1 TypeScript support](https://github.com/facebook/create-react-app/releases/tag/v2.1.0) official released.

So I was interested in what kind of code design and configure the application development with Hooks and TypeScript is. 😀

## Install on your Local
```
git clone git@github.com:ryota-murakami/react-typescript-todo-example-2019.git
cd react-typescript-todo-example-2019
yarn install
yarn start // launch dev-server
```

## Tests
### Cypress

Before run Cypress in local, dev-server has to be running.

```
yarn start
yarn cypress:run
```

or

```
yarn start
yarn cypress:open
```

## Jest

```
yarn test
```

or

```
yarn test --silent
```

If you run `yarn test`, you'll see console.error message on termianl because `ErrorBoundary.test.js` contain invalid react component on purpose.  
`--silent` option hide that error.

## LICENSE

MIT

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://ryota-murakami.github.io/"><img src="https://avatars1.githubusercontent.com/u/5501268?s=400&u=7bf6b1580b95930980af2588ef0057f3e9ec1ff8&v=4" width="100px;" alt="ryota-murakami"/><br /><sub><b>ryota-murakami</b></sub></a><br /><a href="https://github.com/ryota-murakami/react-typescript-todo-example-2019/ryota-murakami/react-typescript-todo-example-2019/commits?author=ryota-murakami" title="Code">💻</a> <a href="https://github.com/ryota-murakami/react-typescript-todo-example-2019/ryota-murakami/react-typescript-todo-example-2019/commits?author=ryota-murakami" title="Documentation">📖</a> <a href="https://github.com/ryota-murakami/react-typescript-todo-example-2019/ryota-murakami/react-typescript-todo-example-2019/commits?author=ryota-murakami" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
