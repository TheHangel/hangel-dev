<template>
  <Header/>
  <!--<button @click="changeLanguage('en')">English</button>
  <button @click="changeLanguage('fr')">French</button>-->
  <router-view />
  <HomePage/>
  <Footer/>
</template>

<script>
import { useI18n } from 'vue-i18n';
import VOverlayItem from './components/minecraft/VOverlayItem.vue';
import ITEMS from '@/constants/items.js';
import HomePage from '@/views/HomePage.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    VOverlayItem,
    HomePage,
    Header,
    Footer
},
  setup() {
    const { locale } = useI18n();
    const changeLanguage = (lang) => {
      locale.value = lang;
    };

    const item = ITEMS.TIPPED_ARROW;

    return {
      changeLanguage,
      item
    };
  }
}
</script>