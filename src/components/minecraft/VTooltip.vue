<template>
    <div
        ref="divTooltip"
        class="absolute bg-black opacity-80 select-none text-center align-items-center pt-3 pl-2 pr-2 -mt-3"
    >
        <p
            v-if="itemName"
            class="text-white text-lg !opacity-100 font-minecraftia"
            style="text-shadow: 2px 2px rgb(93, 93, 93);"
        >
            {{ displayName }}
        </p>
    </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import { useI18n } from 'vue-i18n';

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
    setup(props) {

        // data
        const divTooltip = ref(null);
        const { t } = useI18n();

        // watchers
        watch(divTooltip, () => {
            window.addEventListener("mousemove", (event) => {
                if(divTooltip.value !== null) {
                    divTooltip.value.style.left = (event.clientX+10) + "px";
                    divTooltip.value.style.top = (event.clientY-25) + "px";
                }
            });
        });

        // computed
        const displayName = computed(() => {
            return (props.itemName && props.effectName) ? `${t(props.itemName)} ${t('of')} ${t(props.effectName)}` : t(props.itemName);
        });

        return {
            divTooltip,
            displayName
        };
    }
}
</script>