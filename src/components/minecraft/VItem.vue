<template>
    <img v-if="item.name" class="item" :src="item.texture" :alt="item.name">
    <div v-else class="item"></div>
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

<style>
.item {
    position: relative;
    z-index: 10;
    width: 200px;
    height: 200px;
    float:left;
}
</style>