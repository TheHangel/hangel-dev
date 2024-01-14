<template>
    <header class="bg-[#1a1a1d] shadow-md">
      <nav class="flex overflow-hidden">
        <router-link :to="{ name: 'home' }" class="hover:bg-gray-300 hover:text-black text-white text-center py-3 px-4 no-underline text-lg transition-colors duration-100">
          Accueil
        </router-link>
        <router-link :to="{ name: 'projects' }" class="bg-button text-black text-center py-3 px-4 no-underline text-lg font-bold">
          Projets
        </router-link>
      </nav>
    </header>
</template>