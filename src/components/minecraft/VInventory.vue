<template>
    <button class="btn btn-secondary" @click="add">Add</button>
    <button class="btn btn-secondary" @click="replace">Replace</button>

    <draggable
      :list="inventory"
      item-key="id"
      class="list-group"
      ghost-class="ghost"
      draggable=".list-group-item:not(.exclude)"
      :animation="50"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template #item="{ element }">
          <VItem
          :item="element"
          class="list-group-item"
          :class="{ 'exclude': element.disabled }"
          />
      </template>
    </draggable>
</template>

<script>
import draggable from "vuedraggable";
import VItem from '@/components/minecraft/VItem.vue';
let id = 4;
export default {
  components: {
    draggable,
    VItem
  },
  data() {
    return {
      inventory: [
        { name: "potion", id: 0 },
        { name: "arrow", extension: 'webp', id: 1 },
        { name: "tipped_arrow", extension: 'webp', id: 2 },
        { id: 3, disabled: true }
      ],
      dragging: false
    };
  },
  methods: {
    add: function() {
      this.inventory.push({ name: "potion", id: id++ });
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