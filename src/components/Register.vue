<template>
  <main class="form-signin w-100 m-auto">
    <form>
      <img :src="logo" alt="logo" width="40" height="32" class="me-2" />
      <h1 class="h3 mb-3 fw-normal">Register</h1>
      
      <Input :label="'Your name'" :type="'text'"/>
      <Input :label="'Email address'" :type="'text'"/>
      <Input :label="'Password'" :type="'password'"/>

      <button class="btn btn-primary w-100 py-2 mt-3" type="submit" :disabled="isLoading" @click="submitHandler">Register</button>
    </form>
  </main>
</template>

<script>
import { logo } from '@/constants'
export default {
  data() {
    return {
      logo,
    }
  },

  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading
    },
  },

  methods: {
    submitHandler(e) {
      e.preventDefault()
      this.$store.commit('setLoading')
    },
  },
}
</script>

<style scoped></style>
