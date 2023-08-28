<template>
  {{ dragging }}
  {{ hoverItem }}
  {{ isTooltipVisible }}
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
            @mouseover="hoverItem = true"
            @mouseleave="hoverItem = false"
          />
      </template>
    </draggable>
    <VTooltip v-show="isTooltipVisible" />
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

    const dragging = ref(false);
    const hoverItem = ref(false);

    const isTooltipVisible = computed(() => {
      return !(dragging.value) && hoverItem.value;
    });

    return {
      dragging,
      hoverItem,
      isTooltipVisible
    }
  }
};
</script>
<style scoped>
.ghost {
  opacity: 0.5;
}
</style>