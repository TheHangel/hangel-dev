<template>
  <VInventory
    :key="id"
    :inventory="inventory"
    @move="moveItem($event)"
    @dragend="dragEnd"
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
    const movingIndex = ref(-1);
    const nextIndex = ref(-1);
    const movingItem = ref({});
    const nextItem = ref({});
    const hasMoved = ref(false);

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

    const moveItem = (event) => {
      const { index, futureIndex } = event.draggedContext;
      movingIndex.value = index;
      nextIndex.value = futureIndex;
      hasMoved.value = true;
    };

    const dragEnd = () => {
      if (hasMoved.value) {
          nextItem.value = inventory.value[nextIndex.value];
          movingItem.value = inventory.value[movingIndex.value];
          const _inventory = Object.assign([], inventory.value);
          _inventory[nextIndex.value] = movingItem.value;
          _inventory[movingIndex.value] = nextItem.value;
  
          inventory.value = _inventory;
          hasMoved.value = false;
        }
    };

    // lifecycle hooks
    onMounted(() => {
      for(let i = 0; i < MAX_ITEMS; i++) {
        addItem(randomItem());
      }
    });

    return {
      inventory,
      id,
      // methods
      moveItem,
      dragEnd
    }
  }
}
</script>