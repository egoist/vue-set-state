import Vue from 'vue'
import setState from '../src'

Vue.use(setState)

const Counter = {
  props: ['from'],
  data() {
    return { count: this.from }
  },
  methods: {
    inc() {
      this.setState({ count: this.state.count + 1 })
    },
    dec() {
      this.setState(prevState => ({
        count: prevState.count - 1
      }))
    }
  },
  render() {
    return (
      <div class="counter">
        { this.count }
        <button onClick={this.inc}>increment</button>
        <button onClick={this.dec}>decrement</button>
      </div>
    )
  }
}

new Vue({
  el: '#app',
  render() {
    return <div id="app"><Counter from={999} /></div>
  }
})
