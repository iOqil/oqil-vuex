<template>
  <div class="container">
    <h1>Home View {{ count }}</h1>
    <div class="w-25">
      <Button @click="increaseHandler">Increment</Button>
      <Button @click="decrementHandler">Decrement</Button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    increaseHandler() {
      this.$store.commit('increment')
    },
    decrementHandler() {
      this.$store.commit('decrement')
    },
  },

  computed: {
    count() {
      return this.$store.state.count
    },
  },
}
</script>

<style scoped></style>
