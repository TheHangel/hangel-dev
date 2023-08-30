<template>
    <draggable
      :list="inventory"
      item-key="id"
      class="list-group m-w-200"
      handle=".list-group-item:not(.exclude)"
      :move="handleMove"
      @start="dragging = true"
      @end="handleDragEnd"
    >
      <template #item="{ element }">
          <VItem
            :item="element"
            class="list-group-item"
            :class="{ 'exclude': !element.name }"
            @mouseover="hoverItemStart(element)"
            @mouseleave="hoverItemEnd"
          />
      </template>
    </draggable>

    <VTooltip
      v-show="isTooltipVisible && hoveredItemName"
      :item-name="hoveredItemName"
      :effect-name="hoveredEffectName"
    />
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
  emits: ['move', 'dragend'],
  setup(props, context) {

    // data
    const dragging = ref(false);
    const hoverItem = ref(false);
    const hoveredItemName = ref('');
    const hoveredEffectName = ref('');

    // computed
    const isTooltipVisible = computed(() => {
      return !(dragging.value) && hoverItem.value;
    });

    // methods
    const hoverItemStart = (item) => {
      hoverItem.value = true;
      hoveredItemName.value = item.name;
      hoveredEffectName.value = (item.effect ? item.effect.name : '');
    };

    const hoverItemEnd = () => {
      hoverItem.value = false;
      hoveredItemName.value = '';
      hoveredEffectName.value = '';
    };

    const handleDragEnd = () => {
      dragging.value = false;
      context.emit('dragend');
    };

    const handleMove = (e) => {
      context.emit('move', e);
      return false;
    };

    return {
      // data
      dragging,
      hoverItem,
      hoveredItemName,
      hoveredEffectName,
      // computed
      isTooltipVisible,
      // methods
      hoverItemStart,
      hoverItemEnd,
      handleDragEnd,
      handleMove
    }
  }
};
</script>