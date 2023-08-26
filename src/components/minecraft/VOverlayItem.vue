<template>
    <div>
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