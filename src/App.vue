<template>
  <Header/>
  <!--<button @click="changeLanguage('en')">English</button>
  <button @click="changeLanguage('fr')">French</button>-->
  <router-view />
  <Footer/>
</template>

<script>
import { useI18n } from 'vue-i18n';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  },
  setup() {
    const { locale } = useI18n();
    const changeLanguage = (lang) => {
      locale.value = lang;
    };
  }
}
</script>