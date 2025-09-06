<template>
  <div class="container">
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <RouterLink to="/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
        <img :src="logo" alt="logo" width="40" height="32" class="me-2" />
        <span class="fs-4">OQIL</span>
      </RouterLink>
      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <RouterLink to="/" class="me-3 py-2 link-body-emphasis text-decoration-none"
          >Home</RouterLink
        >
        <RouterLink to="/login" class="me-3 py-2 link-body-emphasis text-decoration-none"
          >Login</RouterLink
        >
        <RouterLink to="/register" class="me-3 py-2 link-body-emphasis text-decoration-none"
          >Register</RouterLink
        >
      </nav>
    </div>
  </div>
</template>

<script>
import { logo } from '@/constants'
export default {
  data() {
    return {
      logo,
    }
  },
}
</script>

<style scoped></style>
