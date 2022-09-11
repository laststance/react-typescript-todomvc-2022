# React TypeScript TodoMVC 2022

[![Netlify Status](https://api.netlify.com/api/v1/badges/877a9a48-c7e1-498c-b56b-81fa8f4d4d8a/deploy-status)](https://app.netlify.com/sites/react-typescript-todomvc/deploys)
[![Build](https://github.com/laststance/react-typescript-todomvc-2022/actions/workflows/build.yml/badge.svg)](https://github.com/laststance/react-typescript-todomvc-2022/actions/workflows/build.yml)
[![Cypress E2E](https://github.com/laststance/react-typescript-todomvc-2022/actions/workflows/e2e.yml/badge.svg)](https://github.com/laststance/react-typescript-todomvc-2022/actions/workflows/e2e.yml)
[![Lint](https://github.com/laststance/react-typescript-todomvc-2022/actions/workflows/lint.yml/badge.svg)](https://github.com/laststance/react-typescript-todomvc-2022/actions/workflows/lint.yml)
[![Test](https://github.com/laststance/react-typescript-todomvc-2022/actions/workflows/test.yml/badge.svg)](https://github.com/laststance/react-typescript-todomvc-2022/actions/workflows/test.yml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Typecheck](https://github.com/laststance/react-typescript-todomvc-2022/actions/workflows/typecheck.yml/badge.svg)](https://github.com/laststance/react-typescript-todomvc-2022/actions/workflows/typecheck.yml)
[![All Contributors](https://img.shields.io/badge/all_contributors-9-orange.svg?style=flat-square)](#contributors)
[![Depfu](https://badges.depfu.com/badges/b291947c58892a6d78e4f3374c4a6d01/overview.svg)](https://depfu.com/github/laststance/react-typescript-todomvc-2022?project_id=9618)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/laststance/react-typescript-todomvc-2022)

<a href="https://react-app-typescript-todo-example.netlify.com/"><img src="https://raw.githubusercontent.com/laststance/react-typescript-todomvc-2022/master/images/cypress_open.gif" alt="gif"></a>

## A Modern Code Style Todo Example 📝

This project was started with the goal of continue to publish TodoMVC Apps in the latest [React](https://reactjs.org/) writing style.

When you found [React.js](https://reactjs.org/) on [TodoMVC](https://todomvc.com/) top page, you might seen classic style `React.createClass()` based source at first.  
I don't complaining about it because old style codebase React app works all over the world and helps people.  
Almost cases, there is no value that spending time for rerwite new syntax sugar of huge codebase.

So this project aming new React learner and who have not written React for a long time and provide handy resource for lerning latest React.js. o

I'm glad to even the repo could be useful for your learning. 🤗

[![Edit react-typescript-todomvc-2022](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/quizzical-blackwell-bvfc5?fontsize=14&hidenavigation=1&theme=dark)

---

## Getting Started

- The app assumed installed `Node.js` newer than [v16.15.1 LTS](https://nodejs.org/en/).
  If you have not it yet, follow the official [Node.js Doc](https://nodejs.org/en/) to install it.

```bash
npx degit laststance/react-typescript-todomvc-2022 react-typescript-todomvc-2022
```

```bash
cd react-typescript-todomvc-2022
```

```bash
yarn install # or npm install
```

```bash
yarn start # or npm start
```

after that auto launch todo app on your default browser and code edit ready.

---

## Stack

- [TODO-CSS-Template](https://github.com/Klerith/TODO-CSS-Template) (Borrowing HTML & CSS Thanks! 👍 )
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/) [v4.2.4](https://github.com/microsoft/TypeScript/releases/tag/v4.2.4)
- [React Router](https://reactrouter.com/)
- [Styled-Components](https://styled-components.com/): CSS-in-JS
- [Recoil](https://recoiljs.org/): A state management library for React
- [Cypress](https://www.cypress.io/): E2E Testing
- [react-testing-library](https://github.com/testing-library/react-testing-library)
- [ESLint](https://eslint.org/)
  - [eslint-config-typescript-react-pro 🌈](https://github.com/laststance/eslint-config-typescript-react-pro)
- [Netlify](https://www.netlify.com/): Deploy & Hosting
- [Github Actions](https://github.com/features/actions): Automation run tests, lint, typecheck, build
- [Depfu](https://depfu.com/github/ryota-murakami/react-typescript-todomvc-2022?project_id=9618): Keep latest npm packages automaticaly

## Command

You can do exact same command with npm, or [install yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable) easily if you have interest.

### `yarn` or `yarn install`
Install all Node Package Modules that depending this project.

### `yarn start`

After that you'll seen the console which are server processes messages.  
Let's follow the message and put in URL `http://localhost:3000/` your browsers adressbar,  
and then you'll got todo app as same as Demo. let's modify under the `src/` code feel free!!

### `yarn build`

 Production build that bundled optimization stuff in `build` directory.

### `yarn serve`

Run production build that generated by `yarn build`.

### `yarn lint`

[ESLint](https://eslint.org/) is at the top.
And setup [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint), integrating [Prettier](https://prettier.io/) as a [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier).  
Here is [final config list](https://github.com/laststance/eslint-config-typescript-react-pro#explicit-all-rule-set-).

### `yarn lint:fix`

Run wtih eslint --fix option.  
Actually frequently use for perform [Prettier](https://prettier.io/) formatting.  

### `yarn typecheck`

Check TypeScript error whole porject.

### `yarn test`

Run [Jest](https://jestjs.io/).  
Using [react-testing-library](https://github.com/testing-library/react-testing-library) for component integration testing.

### `yarn clean`

Delete `node_modules/*`, `yarn.lock`, `build/*` once.

### `yarn prettier`

Run prettier formatting holeproject without all JS/TS files.

### `yarn cypress:open`

[Cypress](https://www.cypress.io/) is all-in-one E2E Testing tool which can deal testing on real browser.  
This command using [Electron](https://www.electronjs.org/) by Cypress default.

`yarn cypress:open` require `yarn start` before.

```bash
yarn start # Launch DevServer
yarn cypress:open
```

![cypress_open](images/cypress_open.gif)

### `yarn cypress:run`

Run Cypress with [Electron](https://www.electronjs.org/).  
That's same as run all test on cypress GUI after run `yarn cypress:open`.

```bash
yarn start # Launch DevServer
yarn cypress:run
```

### `yarn cypress:run:headless`

Run Cypress with headless [Electron](https://www.electronjs.org/).  
That mean this command complete all on a terminal without GUI.

```bash
yarn start # Launch DevServer
yarn cypress:run:headless
```

## 🗒 Note

**This is not a Best Practice introduction.  
There are tons of effective way to create solid software in JavaScript World, you have a lot of other option based on your preference for approaching where, The Repo is just a style of my favorite.**

"_How to combining TypeScript with massive Babel or JavaScript tools ecosystem?_"

**I hope this helps you know like that from what I've Published!**

## Issues

Please feel free to post [New Issue](https://github.com/laststance/react-typescript-todomvc-2022/issues/new) or Pull Request 🤗

## Questions

Please feel free to post [New Issue](https://github.com/laststance/react-typescript-todomvc-2022/issues/new) or reply on [Twitter](https://twitter.com/malloc007) 🐦

If you want to get more generally answers, these community are might be helpful 🍻

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
    <td align="center"><a href="http://ryota-murakami.github.io/"><img src="https://avatars1.githubusercontent.com/u/5501268?s=400&u=7bf6b1580b95930980af2588ef0057f3e9ec1ff8&v=4?s=100" width="100px;" alt=""/><br /><sub><b>ryota-murakami</b></sub></a><br /><a href="https://github.com/laststance/react-typescript-todomvc-2022/commits?author=ryota-murakami" title="Code">💻</a> <a href="https://github.com/laststance/react-typescript-todomvc-2022/commits?author=ryota-murakami" title="Documentation">📖</a> <a href="https://github.com/laststance/react-typescript-todomvc-2022/commits?author=ryota-murakami" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://donkeycar.com"><img src="https://avatars2.githubusercontent.com/u/147582?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Will Roscoe</b></sub></a><br /><a href="https://github.com/laststance/react-typescript-todomvc-2022/commits?author=wroscoe" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/JunQu"><img src="https://avatars2.githubusercontent.com/u/39846309?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Peng Fei</b></sub></a><br /><a href="https://github.com/laststance/react-typescript-todomvc-2022/issues?q=author%3AJunQu" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/alexpanchuk"><img src="https://avatars3.githubusercontent.com/u/26270612?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alex Panchuk</b></sub></a><br /><a href="https://github.com/laststance/react-typescript-todomvc-2022/commits?author=alexpanchuk" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/BurhanMullamitha"><img src="https://avatars1.githubusercontent.com/u/42492054?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Burhan Mullamitha</b></sub></a><br /><a href="https://github.com/laststance/react-typescript-todomvc-2022/commits?author=BurhanMullamitha" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/hefengxian"><img src="https://avatars.githubusercontent.com/u/4338497?v=4?s=100" width="100px;" alt=""/><br /><sub><b>hefengxian</b></sub></a><br /><a href="https://github.com/laststance/react-typescript-todomvc-2022/commits?author=hefengxian" title="Code">💻</a> <a href="https://github.com/laststance/react-typescript-todomvc-2022/commits?author=hefengxian" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://ethansetnik.com"><img src="https://avatars.githubusercontent.com/u/664434?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ethan Setnik</b></sub></a><br /><a href="https://github.com/laststance/react-typescript-todomvc-2022/commits?author=esetnik" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/PaoloJN"><img src="https://avatars.githubusercontent.com/u/87121008?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Paolo Nessim</b></sub></a><br /><a href="https://github.com/laststance/react-typescript-todomvc-2022/commits?author=PaoloJN" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/likui628"><img src="https://avatars.githubusercontent.com/u/90845831?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Li Kui</b></sub></a><br /><a href="https://github.com/laststance/react-typescript-todomvc-2022/commits?author=likui628" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
