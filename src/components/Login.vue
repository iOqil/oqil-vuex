<template>
  <main class="form-signin w-100 m-auto">
    <form>
      <img :src="logo" alt="logo" width="40" height="32" class="me-2" />
      <h1 class="h3 mb-3 fw-normal">Login</h1>

      <Input :label="'Email address'" :type="'text'" />
      <Input :label="'Password'" :type="'password'"/>

      <Button type="submit">Login</Button>
    </form>
  </main>
</template>

<script>
import { logo } from '@/constants'
import Button from '../ui-components/Button.vue'
export default {
  data() {
    return {
      logo,
    }
  },
}
</script>

<style scoped></style>
