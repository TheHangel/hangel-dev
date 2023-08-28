<template>
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
    <VTooltip />
</template>

<script>
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
  }
};
</script>
<style scoped>
.ghost {
  opacity: 0.5;
}
</style>