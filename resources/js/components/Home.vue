<template>
<div>
  <p>This is the homepage</p>
  <p>Count = {{this.$store.count}}</p>
  <button @click="increase">+</button>
</div>
</template>

<script>
  export default {
    name: 'Home',

    methods: {
      increase(count) {
        this.$store.commit('increase', count)
      },
      decrease() {
        store.commit('decrease', count)
      }
    },

    computed: {
      counter () {
        return store.state.count
      }
    },

  }

</script>