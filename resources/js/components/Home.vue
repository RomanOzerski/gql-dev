<template>
<div>
  <p>This is the homepage</p>
  <p>Count = {{ count }}</p>
  <button @click="increase">+</button>
</div>
</template>

<script>
//import store from '../store/store'

export default {
  computed: {
    count () {
      return this.$rootStore.state.count
    }
  },

  methods: {
    increase () {
      this.$rootStore.commit('increase')
    }
  }
}
</script>