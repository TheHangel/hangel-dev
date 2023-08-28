<template>
    <draggable
      :list="inventory"
      item-key="id"
      class="list-group m-w-200"
      ghost-class="ghost"
      handle=".list-group-item:not(.exclude)"
      :animation="50"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template #item="{ element }">
          <VItem
            :item="element"
            class="list-group-item"
            :class="{ 'exclude': !element.name }"
            @mouseover="hoverItemStart(element)"
            @mouseleave="hoverItem = false"
          />
      </template>
    </draggable>
    <VTooltip v-show="isTooltipVisible" :name="hoveredItemName" />
</template>

<script>
import { ref, computed } from "vue";
import draggable from "vuedraggable";
import VItem from '@/components/minecraft/VItem.vue';
import VTooltip from '@/components/minecraft/VTooltip.vue';

export default {
  components: {
    draggable,
    VItem,
    VTooltip
  },
  props: {
    inventory: {
      type: Array,
      default: () => []
    }
  },
  setup() {

    // data
    const dragging = ref(false);
    const hoverItem = ref(false);
    const hoveredItemName = ref('');

    // computed
    const isTooltipVisible = computed(() => {
      return !(dragging.value) && hoverItem.value;
    });

    // methods
    const hoverItemStart = (item) => {
      hoverItem.value = true;
      hoveredItemName.value = item.name;
    };

    return {
      dragging,
      hoverItem,
      isTooltipVisible,
      hoverItemStart,
      hoveredItemName
    }
  }
};
</script>
<style scoped>
.ghost {
  opacity: 0.5;
}
</style>