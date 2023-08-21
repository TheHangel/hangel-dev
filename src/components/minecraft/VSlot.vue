<template>
    <draggable
        class="list-group"
        tag="div"
        :animation="50"
        :disabled="false"
        group="inventory"
        ghostClass="ghost"
        @start="drag = true"
        @end="drag = false"
    >
        <!-- <transition-group type="transition" :name="!drag ? 'flip-list' : null"> -->
            <VItem :item="item" :key="item.id" />
        <!-- </transition-group> -->
    </draggable>
    <img class="slot" src="src/assets/minecraft/slot.jpg" alt="slot">
</template>

<script>
//import { ref } from 'vue';
import { VueDraggableNext } from "vue-draggable-next";
import VItem from '@/components/minecraft/VItem.vue';

export default {
    components: {
        draggable : VueDraggableNext,
        VItem
    },
    props: {
        item: {
            type: Object,
            default: () => {}
        },
        extension: {
            type: String,
            default: 'png'
        }
    }/*,
    setup() {
        const drag = ref(false);
        return {
            drag
        };
    }*/
}
</script>

<style>
.list-group {
    position: relative;
}

.slot {
    position: absolute;
}
</style>