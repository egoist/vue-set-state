# vue-set-state

[![NPM version](https://img.shields.io/npm/v/vue-set-state.svg?style=flat)](https://npmjs.com/package/vue-set-state) [![NPM downloads](https://img.shields.io/npm/dm/vue-set-state.svg?style=flat)](https://npmjs.com/package/vue-set-state) [![Build Status](https://img.shields.io/circleci/project/egoist/vue-set-state/master.svg?style=flat)](https://circleci.com/gh/egoist/vue-set-state) [![codecov](https://codecov.io/gh/egoist/vue-set-state/branch/master/graph/badge.svg)](https://codecov.io/gh/egoist/vue-set-state)
 [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

> Bring React's setState greatness to Vue land, seriously? nope.

## Install

```bash
yarn add vue-set-state
```

## Usage

```js
import setState from 'vue-set-state'

Vue.use(setState)

new Vue({
  data: { count: 0 },
  methods: {
    increment() {
      this.setState(prevState => ({
        count: prevState.count + 1
      }))
    }
  }
})
```

## API

well, same as react's

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Development

```bash
# launch visual test
yarn dev 

# launch unit test
yarn test
```

## Author

**vue-set-state** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/vue-set-state/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
