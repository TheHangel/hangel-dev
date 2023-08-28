<template>
    <img
        v-if="item.name && !(item.texture instanceof Object)"
        class="float-left aspect-square"
        :src="item.texture"
        :alt="item.name"
    >
    <VOverlayItem
        v-else-if="item.name && (item.texture instanceof Object)"
        :item="item"
    />
    <div
        v-else
        class="w-40 h-40 float-left aspect-square border border-gray-400 bg-gray-200"
    >
    </div>
</template>

<script>
import VOverlayItem from './VOverlayItem.vue';

export default {
    components: {
        VOverlayItem
    },
    props: {
        item: {
            type: Object,
            default: () => { }
        }
    }
}
</script>