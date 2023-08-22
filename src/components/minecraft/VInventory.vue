<template>
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
    >
        <transition-group :key="inventoryKey" type="transition" :name="!drag ? 'flip-list' : null">
            <div
                v-for="(item, index) in inventory"
                :key="index"
            >
                <VItem :item="item" :key="item.id" />
            </div>
        </transition-group>
    </draggable>
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

        const arrow = ref({ id: 2, name: 'arrow', extension: 'webp' });

        // inventory
        const inventory = computed(() => {
            return [potion.value, tipped_arrow.value, {  }]
        });

        // methods
        const changeItem = (item, id) => {
            const index = inventory.value.findIndex(item => item.id === id);

            if (index !== -1) {
                inventory.value[index] = { ...item };
            }
            inventory.value[0].id = 99;
            console.log(inventory.value);
        }

        const addItem = (item) => {
            inventory.value.push(item);
            update();
        }

        const update = () => {
            inventoryKey.value++;
        }

        return {
            drag,
            inventory,
            changeItem,
            arrow,
            addItem,
            inventoryKey
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