<template>
    <img
        v-if="item.name && !(item.texture instanceof Object)"
        class="float-left aspect-square"
        :src="item.texture"
        :alt="item.name"
    >
    <div v-else-if="item.name && (item.texture instanceof Object)" >
        <img
            class="aspect-square float-left z-10"
            :src="item.texture.base"
            :alt="item.name"
        >
        <img
            class="aspect-square float-left z-20 -ml-40"
            :src="item.texture.overlay"
            :alt="item.name"
            style="filter: invert(20%) sepia(53%) saturate(6725%) hue-rotate(358deg) brightness(97%) contrast(135%);"
        >
    </div>
    <div
        v-else
        class="w-32 h-32 float-left aspect-square border border-gray-400 bg-gray-200"
    >
    </div>
</template>

<script>

export default {
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    }
}
</script>