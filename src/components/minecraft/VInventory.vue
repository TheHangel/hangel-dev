<template>

<button @click="addItem(arrow)">CHANGE</button>
    <div>
        <VSlot v-for="(item) in inventory" :key="item.id" :item="item" :extension="item.extension" />
    </div>

</template>

<script>
import { ref, computed } from 'vue';
import VSlot from '@/components/minecraft/VSlot.vue';

export default {
    components: {
        VSlot
    },
    emits: ['item-change'],
    setup(props, context) {

    // items
    const potion = ref({ id: 0, name: 'potion', extension: 'png'});
    const tipped_arrow = ref({ id: 1, name: 'tipped_arrow', extension: 'webp'});

    const arrow = ref({ id: 2, name: 'arrow', extension: 'webp'});

    // inventory
    const inventory = computed(() => {
        return [potion.value, tipped_arrow.value]
    });

    // methods
    const changeItem = (item, id) => {
        const index = inventory.value.findIndex(item => item.id === id);

        if (index !== -1) {
            inventory.value[index] = { ...item };
        }
        inventory.value[0].id = 99;
        console.log(inventory.value);
        context.emit('item-change');
    }

    const addItem = (item) => {
        inventory.value.push(item);
        console.log(inventory.value);
        context.emit('item-change');
    }

    return {
        inventory,
        changeItem,
        arrow,
        addItem
    };
}
};
</script>