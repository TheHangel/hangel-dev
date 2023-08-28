<template>
    <div
        v-show="show"
        ref="divSouris"
        class="absolute bg-black opacity-70 select-none"
    >
        <p class="text-white">Voici le texte du div</p>
    </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
    setup() {
        const divSouris = ref(null);

        watch(divSouris, () => {
            window.addEventListener("mousemove", function(event) {
                divSouris.value.style.left = (event.clientX+10) + "px";
                divSouris.value.style.top = (event.clientY-25) + "px";
            });
        });
        return { divSouris };
    }
}
</script>