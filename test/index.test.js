import Vue from 'vue'
import setState from '../src'

Vue.use(setState)

test('main', () => {
  return new Promise(resolve => {
    const vm = new Vue({
      data: { count: 0 },
      methods: {
        inc() {
          this.setState({ count: this.state.count + 1 })
        }
      }
    })
    vm.inc()
    expect(vm.state.count).toBe(0)
    vm.$nextTick(() => {
      expect(vm.state.count).toBe(1)
      resolve()
    })
  })
})
