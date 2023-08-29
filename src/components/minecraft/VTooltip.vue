<template>
    <div
        ref="divTooltip"
        class="absolute bg-black opacity-80 select-none text-center align-items-center pt-3 pl-2 pr-2 -mt-3"
    >
        <p
            v-if="effectName"
            class="text-white text-lg !opacity-100 font-minecraftia"
            style="text-shadow: 2px 2px rgb(93, 93, 93);"
        >
            {{ $t(itemName) }} {{ $t('of') }} {{ $t(effectName) }}
        </p>
        <p
            v-else
            class="text-white text-lg !opacity-100
            font-minecraftia"
            style="text-shadow: 2px 2px rgb(93, 93, 93);"
        >
            {{ $t(itemName) }}
        </p>
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

        // data
        const divTooltip = ref(null);

        // watchers
        watch(divTooltip, () => {
            window.addEventListener("mousemove", (event) => {
                if(divTooltip.value !== null) {
                    divTooltip.value.style.left = (event.clientX+10) + "px";
                    divTooltip.value.style.top = (event.clientY-25) + "px";
                }
            });
        });

        return { divTooltip };
    }
}
</script>