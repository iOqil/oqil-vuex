<template>
  <main class="form-signin w-100 m-auto">
    <form>
      <img :src="logo" alt="logo" width="40" height="32" class="me-2" />
      <h1 class="h3 mb-3 fw-normal">Register</h1>

      <Input :label="'Your name'" :type="'text'" v-model="username" />
      <Input :label="'Email address'" :type="'email'" v-model="email" />
      <Input :label="'Password'" :type="'password'" v-model="password" />

      <button
        class="btn btn-primary w-100 py-2 mt-3"
        type="submit"
        :disabled="isLoading"
        @click="submitHandler"
      >
        Register
      </button>
    </form>
  </main>
</template>

<script>
import { logo } from '@/constants'
export default {
  data() {
    return {
      logo,
      username: '',
      email: '',
      password: '',
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
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      }
      this.$store
        .dispatch('register', data)
        .then((user) => {
          console.log('Registered user:', user)
          this.$router.push({name: 'home'})
        })
        .catch((err) => {
          console.log('Registration error:', err)
        })
    },
  },
}
</script>

<style scoped></style>
