<template>
  <header class="bg-[#1a1a1d] shadow-md">
    <nav class="flex overflow-hidden">
      <router-link
        :to="{ name: 'home' }"
        :class="[
          'text-center py-3 px-4 no-underline text-lg transition-colors duration-100',
          isHomeActive ? 'bg-button text-black font-bold' : 'hover:bg-gray-300 hover:text-black text-white'
        ]"
      >
        Accueil
      </router-link>
      <router-link
        :to="{ name: 'projects' }"
        :class="[
          'text-center py-3 px-4 no-underline text-lg transition-colors duration-100',
          isProjectsActive ? 'bg-button text-black font-bold' : 'hover:bg-gray-300 hover:text-black text-white'
        ]"
      >
        Projets
      </router-link>
    </nav>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();

    const isHomeActive = computed(() => route.name === 'home');
    const isProjectsActive = computed(() => route.name === 'projects');

    return {
      isHomeActive,
      isProjectsActive
    }
  }
}
</script>
