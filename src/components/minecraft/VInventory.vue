<template>
    <button class="btn btn-secondary" @click="add">Add</button>
    <button class="btn btn-secondary" @click="replace">Replace</button>

    <draggable
      :list="inventory"
      item-key="id"
      class="list-group m-w-200"
      ghost-class="ghost"
      handle=".list-group-item:not(.exclude)"
      :animation="50"
    >
      <template #item="{ element }">
          <VItem
            :item="element"
            class="list-group-item"
            :class="{ 'exclude': !element.name }"
          />
      </template>
    </draggable>
</template>

<script>
import draggable from "vuedraggable";
import VItem from '@/components/minecraft/VItem.vue';
import ITEMS from '@/constants/items.js';
let id = 8;
export default {
  components: {
    draggable,
    VItem
  },
  data() {
    return {
      inventory: [
        { ...ITEMS.GLASS_BOTTLE, id:0 },
        { ...ITEMS.ARROW, id:1 },
        { ...ITEMS.TIPPED_ARROW, id:2 },
        { ...ITEMS.POTION, id: 3 },
        { ...ITEMS.SPLASH_POTION, id: 4 },
        { ...ITEMS.LINGERING_POTION, id: 5 },
        { id: 6 },
        { id: 7 },
      ]
    };
  },
  methods: {
    add: function() {
      this.inventory.push({ ...ITEMS.GLASS_BOTTLE, id: id++ });
    },
    replace: function() {
      this.list = [{ name: "Edgard", id: id++ }];
    }
  }
};
</script>
<style scoped>
.ghost {
  opacity: 0.5;
}
</style>