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

    const DISABLED_SLOT = { disabled: true };

    // methods
    const addItem = (item) => {
      inventory.value.push({ ...item, id: id.value++ });
    };

    const replaceItem = (item, index) => {
      inventory.value[index] = item;
    };

    const itemWithoutId = (item) => {
      const { id, ...rest } = item;
      return rest;
    };

    const isEmpty = (item) => {
      return Object.keys(item).length === 0 && item.constructor === Object;
    };

    const isPotion = (item) => {
      return (item.name === ITEMS.potion.name || item.name === ITEMS.splash_potion.name || item.name === ITEMS.lingering_potion.name);
    };

    const randomItem = () => {
      const keys = Object.keys(ITEMS);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      let i = ITEMS[randomKey];
      if(i.name === ITEMS.tipped_arrow.name || isPotion(i)) {
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

    const checkRecipe = () => {
      if(movingIndex.value === 8) {
        replaceItem(ITEMS.empty_slot, 2);
        replaceItem(ITEMS.empty_slot, 5);
      }
      if(!isEmpty(itemWithoutId(inventory.value[8]))) {
        if(!inventory.value[2].name === ITEMS.arrow.name || !isPotion(inventory.value[5])){
          replaceItem(ITEMS.empty_slot, 8);
        }
        return;
      }
      if(inventory.value[2].name === ITEMS.arrow.name && isPotion(inventory.value[5])) {
        const effect = inventory.value[5].effect;
        const tippedArrow = { ...ITEMS.tipped_arrow, effect };
        replaceItem(tippedArrow, 8);
      }
    }

    const dragEnd = () => {
      if (hasMoved.value) {
          nextItem.value = inventory.value[nextIndex.value];
          movingItem.value = inventory.value[movingIndex.value];
          const _inventory = Object.assign([], inventory.value);
          _inventory[nextIndex.value] = movingItem.value;
          _inventory[movingIndex.value] = nextItem.value;
  
          inventory.value = _inventory;
          hasMoved.value = false;
          checkRecipe();
        }
    };

    // lifecycle hooks
    onMounted(() => {
      for(let i = 0; i < 2; i++) {
        addItem(DISABLED_SLOT);
      }
      addItem(ITEMS.empty_slot);
      for(let i = 0; i < 2; i++) {
        addItem(DISABLED_SLOT);
      }
      addItem(ITEMS.empty_slot);
      for(let i = 0; i < 2; i++) {
        addItem(DISABLED_SLOT);
      }
      addItem(ITEMS.empty_slot);
      for(let i = 0; i < 3; i++) {
        addItem(DISABLED_SLOT);
      }
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