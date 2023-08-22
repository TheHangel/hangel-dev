<template>
    <img v-if="item.name" class="item" :src="item_texture" :alt="item.name">
    <div v-else class="item"></div>
</template>

<script>

export default {
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    },
    setup(props) {
        const extension = props.item.extension ? props.item.extension : 'png';
        const item_texture = "src/assets/minecraft/"+props.item.name+"."+extension;
        return {
            item_texture
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
}
</style>