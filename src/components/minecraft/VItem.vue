<template>
    <img class="item" :src="item_texture" :alt="item.name">
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
}
</style>