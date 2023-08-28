<template>
    <div
        ref="divSouris"
        class="absolute bg-black opacity-70 select-none text-center pt-1 pb-1 pl-2 pr-2"
    >
        <p v-if="effectName" class="text-white text-lg">{{ $t(itemName) }} {{ $t('of') }} {{ $t(effectName) }}</p>
        <p v-else class="text-white text-lg">{{ $t(itemName) }}</p>
    </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
    props: {
        itemName: {
            type: String,
            default: ''
        },
        effectName: {
            type: String,
            default: ''
        }
    },
    setup() {
        const divSouris = ref(null);

        watch(divSouris, () => {
            window.addEventListener("mousemove", function(event) {
                if(divSouris.value !== null) {
                    divSouris.value.style.left = (event.clientX+10) + "px";
                    divSouris.value.style.top = (event.clientY-25) + "px";
                }
            });
        });
        return { divSouris };
    }
}
</script>