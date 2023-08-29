<template>
    <div
        ref="divSouris"
        class="absolute bg-black opacity-80 select-none text-center align-items-center pt-3 pl-2 pr-2 -mt-3"
    >
        <p v-if="effectName" class="text-white text-lg !opacity-100" style="text-shadow: 2px 2px rgb(93, 93, 93); font-family: 'minecraftia';">{{ $t(itemName) }} {{ $t('of') }} {{ $t(effectName) }}</p>
        <p v-else class="text-white text-lg !opacity-100" style="text-shadow: 2px 2px rgb(93, 93, 93); font-family: 'minecraftia';">{{ $t(itemName) }}</p>
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