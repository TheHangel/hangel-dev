<template>
    <div v-if="item.name">
        <img
            v-if="!(item.texture instanceof Object)"
            class="float-left aspect-square"
            :src="item.texture"
            :alt="item.name"
        >
        <VOverlayItem
            v-else
            :item="item"
        />
    </div>
    <div
        v-else
        class="w-40 h-40 float-left aspect-square"
    >
    </div>
</template>

<script>
import VOverlayItem from '@/components/minecraft/VOverlayItem.vue'

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