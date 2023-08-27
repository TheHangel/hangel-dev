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
import { useI18n } from 'vue-i18n';
import VOverlayItem from './components/minecraft/VOverlayItem.vue';
import ITEMS from '@/constants/items.js';

export default {
  components: {
    VOverlayItem
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