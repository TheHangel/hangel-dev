<template>
  <router-link to="/minecraft/the-fletching-table-mod">FLETCHING</router-link>
  <router-view />
</template>

<script>
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
  }
}
</script>