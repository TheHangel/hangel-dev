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
import EFFECTS from '@/constants/effects.js';
// components
import VInventory from '@/components/minecraft/VInventory.vue';

export default {
  components: {
    VInventory
  },
  setup() {

    // data
    const id = ref(0);
    const MAX_ITEMS = 36;
    const inventory = ref([]);

    // methods
    const addItem = (item) => {
      inventory.value.push({ ...item, id: id.value++ });
    };

    const randomItem = () => {
      const keys = Object.keys(ITEMS);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      let i = ITEMS[randomKey];
      if(i.name === 'tipped_arrow' || i.name === 'potion' || i.name === 'lingering_potion' || i.name === 'splash_potion') {
        const keys = Object.keys(EFFECTS);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const e = EFFECTS[randomKey];
        i = { ...i, effect: e };
      }
      return i;
    };

    // lifecycle hooks
    onMounted(() => {
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