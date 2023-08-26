<template>
  <VInventory
    :key="id"
    :inventory="inventory"
  />
</template>

<script>
import { onMounted, ref } from 'vue';
// constants
import ITEMS from '@/constants/items.js';
// components
import VInventory from '@/components/minecraft/VInventory.vue';

export default {
  components: {
    VInventory
  },
  setup() {

    // data
    const id = ref(0);
    const MAX_ITEMS = 10;
    const inventory = ref([]);

    // methods
    const addItem = (item) => {
      inventory.value.push({ ...item, id: id.value++ });
    };

    const randomItem = () => {
      const keys = Object.keys(ITEMS);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      return ITEMS[randomKey];
    };

    // lifecycle hooks
    onMounted(() => {
      addItem({name:"special"});
      for(let i = 0; i < MAX_ITEMS; i++){
        addItem(randomItem());
      }
    });

    return {
      inventory,
      id
    }
  }
}
</script>