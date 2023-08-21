<template>
  <VInventory @item-change="onInventoryChange" :key="inventory" />
</template>

<script>
import { ref } from 'vue';
import VInventory from './components/minecraft/VInventory.vue';

export default {
  components: {
    VInventory
  },
  setup() {
    const inventory = ref(0);

    const onInventoryChange = () => {
      inventory.value++;
    }

    return {
      inventory,
      onInventoryChange
    }
  }
}
</script>