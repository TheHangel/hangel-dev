<template>
  <router-link to="/minecraft/the-fletching-table-mod">FLETCHING</router-link>
  <br>
  <button @click="changeLanguage('en')">English</button>
  <button @click="changeLanguage('fr')">French</button>
  <br>
  {{ $t('glass_bottle') }}
  <br>
  <router-view />
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const { locale } = useI18n();
    const changeLanguage = (lang) => {
      locale.value = lang;
    };

    return {
      changeLanguage,
    };
  }
}
</script>