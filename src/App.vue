<template>
      <button class="btn btn-secondary" @click="add">Add</button>
      <button class="btn btn-secondary" @click="replace">Replace</button>

      <draggable
        :list="list"
        item-key="name"
        class="list-group"
        ghost-class="ghost"
        draggable=".list-group-item:not(.exclude)"
        @start="dragging = true"
        @end="dragging = false"
      >
        <template #item="{ element }">
          <div class="list-group-item" :class="{ 'exclude': element.disabled }">
            {{ element.name }}
          </div>
        </template>
      </draggable>
</template>

<script>
import draggable from "vuedraggable";
let id = 1;
export default {
  components: {
    draggable
  },
  data() {
    return {
      list: [
        { name: "John", id: 0 },
        { name: "Joao", id: 1 },
        { name: "Jean", id: 2 },
        { id: 3 }
      ],
      dragging: false
    };
  },
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    }
  },
  methods: {
    add: function() {
      this.list.push({ name: "THIBAUD " + id, id: id++, disabled: true });
    },
    replace: function() {
      this.list = [{ name: "Edgard", id: id++ }];
    },
    checkMove: function(e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    }
  }
};
</script>
<style scoped>

.ghost {
  opacity: 0.5;
}
</style>