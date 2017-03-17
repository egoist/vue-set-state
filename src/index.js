export default function (Vue) {
  Vue.prototype.setState = function (obj, cb) {
    const newState = typeof obj === 'function' ?
      obj(this.state, this.props) :
      obj

    for (const key in newState) { // eslint-disable-line guard-for-in
      this[key] = newState[key]
    }

    cb && this.$nextTick(cb)
  }

  Object.defineProperties(Vue.prototype, {
    state: {
      get() {
        return this.$data
      }
    },
    props: {
      get() {
        return this.$props
      }
    }
  })
}
