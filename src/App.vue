<template>
  <div class="py-3">
    <Navbar />
  </div>

  <RouterView />
</template>

<script>
import {Navbar} from '@/components';
import { RouterView } from 'vue-router';
export default {
  components: {
    Navbar,
  },
}
</script>

<style scoped></style>
