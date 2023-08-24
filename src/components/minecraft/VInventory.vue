<template>
    {{ inventoryKey }}
    <button @click="addItem(arrow)">ADD</button>
    <draggable
        class="list-group"
        :animation="50"
        :disabled="false"
        :list="inventory"
        item-key="id"
        group="inventory"
        ghostClass="ghost"
        @start="drag = true"
        @end="drag = false"
        :move="show"
    >
        <transition-group :key="inventoryKey" type="transition" :name="!drag ? 'flip-list' : null">
            <VItem v-for="(item) in inventory" :item="item" :key="item.id" />
        </transition-group>
    </draggable>
    {{ inventory }}
</template>

<script>
import { ref, computed } from 'vue';
import { VueDraggableNext } from "vue-draggable-next";
import VItem from '@/components/minecraft/VItem.vue';

export default {
    components: {
        draggable : VueDraggableNext,
        VItem
    },
    setup(props, context) {

        const drag = ref(false);
        const inventoryKey = ref(0);

        // items
        const potion = ref({ id: 0, name: 'potion', extension: 'png' });
        const tipped_arrow = ref({ id: 1, name: 'tipped_arrow', extension: 'webp' });

        const arrow = ref({ name: 'arrow', extension: 'webp' });

        // inventory
        const inventory = computed(() => {
            return [potion.value, tipped_arrow.value]
        });

        // methods
        const show = () => {
            console.log(inventory.value);
        }

        const changeItem = (item, id) => {
            const index = inventory.value.findIndex(item => item.id === id);

            if (index !== -1) {
                inventory.value[index] = { ...item };
            }
            inventory.value[0].id = 99;
            console.log(inventory.value);
        }

        const addItem = (item) => {
            const newItem = { ...item, id: inventory.value.length };
            inventory.value.push(newItem);
            update();
        }

        const update = () => {
            inventoryKey.value++;
        }

        return {
            drag,
            inventoryKey,
            inventory,
            arrow,
            // methods
            show,
            changeItem,
            addItem
        };
    }
};
</script>

<style>
.list-group {
    position: relative;
}

.slot {
    position: absolute;
}

.ghost {
    opacity: 0.5;
}
</style>