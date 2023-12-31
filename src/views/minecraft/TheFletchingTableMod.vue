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
    const inventory = ref([]);
    const movingIndex = ref(-1);
    const nextIndex = ref(-1);
    const movingItem = ref({});
    const nextItem = ref({});
    const hasMoved = ref(false);

    // constants
    const MAX_HORIZONTAL_ITEMS = 9;
    const MAX_VERTICAL_ITEMS = 3;
    const MAX_ITEMS = MAX_HORIZONTAL_ITEMS*MAX_VERTICAL_ITEMS;
    const DISABLED_SLOT = { disabled: true };
    const RECIPE_ARROW_INDEX = 10;
    const RECIPE_EFFECT_INDEX = 13;
    const RECIPE_RESULT_INDEX = 16;

    // methods
    const addItem = (item) => {
      inventory.value.push({ ...item, id: id.value++ });
    };

    const replaceItem = (item, index) => {
      item = { ...item, id: id.value++ };
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
      if(movingIndex.value === RECIPE_RESULT_INDEX) {
        replaceItem(ITEMS.empty_slot, RECIPE_ARROW_INDEX);
        if(inventory.value[RECIPE_EFFECT_INDEX].name === ITEMS.potion.name) {
          replaceItem(ITEMS.glass_bottle, RECIPE_EFFECT_INDEX);
        }
        else {
          replaceItem(ITEMS.empty_slot, RECIPE_EFFECT_INDEX);
        }
      }
      if(!isEmpty(itemWithoutId(inventory.value[RECIPE_RESULT_INDEX]))) {
        if(!(inventory.value[RECIPE_ARROW_INDEX].name === ITEMS.arrow.name) || !isPotion(inventory.value[RECIPE_EFFECT_INDEX])){
          replaceItem(ITEMS.empty_slot, RECIPE_RESULT_INDEX);
        }
        return;
      }
      if(inventory.value[RECIPE_ARROW_INDEX].name === ITEMS.arrow.name && isPotion(inventory.value[RECIPE_EFFECT_INDEX])) {
        const effect = inventory.value[RECIPE_EFFECT_INDEX].effect;
        const tippedArrow = { ...ITEMS.tipped_arrow, effect };
        replaceItem(tippedArrow, RECIPE_RESULT_INDEX);
      }
    };

    const isFordiddenMove = () => {
      return (nextItem.value.disabled || nextIndex.value === RECIPE_RESULT_INDEX
      ||
        (movingIndex.value === RECIPE_RESULT_INDEX
        &&
        (nextIndex.value === RECIPE_ARROW_INDEX || nextIndex.value === RECIPE_EFFECT_INDEX)
        )
      ||
        (movingIndex.value === RECIPE_RESULT_INDEX && !isEmpty(itemWithoutId(nextItem.value))));
    };

    const dragEnd = () => {
      if (hasMoved.value) {
          nextItem.value = inventory.value[nextIndex.value];
          if(isFordiddenMove()) {
            hasMoved.value = false;
            return;
          }
          movingItem.value = inventory.value[movingIndex.value];
          const _inventory = Object.assign([], inventory.value);
          _inventory[nextIndex.value] = movingItem.value;
          _inventory[movingIndex.value] = nextItem.value;
  
          inventory.value = _inventory;
          hasMoved.value = false;
          checkRecipe();
        }
    };

    const fillFletchingTable = () => {
      for(let i = 0; i < MAX_HORIZONTAL_ITEMS; i++) {
        for(let j = 0; j < MAX_VERTICAL_ITEMS; j++) {
          const index = i * MAX_VERTICAL_ITEMS + j;
          if(index === RECIPE_ARROW_INDEX || index === RECIPE_EFFECT_INDEX || index === RECIPE_RESULT_INDEX) {
            addItem(ITEMS.empty_slot);
            continue;
          }
          addItem(DISABLED_SLOT);
        }
      }
    };

    const fillInventory = () => {
      for(let i = 0; i < MAX_ITEMS; i++) {
        addItem(randomItem());
      }
    };

    // lifecycle hooks
    onMounted(() => {
      fillFletchingTable();
      fillInventory();
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