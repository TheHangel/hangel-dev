<template>
    <div
        class="mouse-follow-text relative overflow-hidden h-full w-full"
        @mousemove="updatePosition"
        @mouseenter="isVisible = true"
        @mouseleave="isVisible = false"
    >
        <div
            v-if="isVisible"
            :style="{ top: mouseY + 'px', left: mouseX + 'px' }"
            class="text-container absolute whitespace-nowrap bg-black text-white p-2 rounded pointer-events-none"
        >
            {{ $t(text) }}
        </div>
        <slot />
    </div>
</template>

<script>

export default {
    data() {
        return {
            mouseX: 0,
            mouseY: 0,
            isVisible: false,
            text: "glass_bottle"
        };
    },
    methods: {
        updatePosition(event) {
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
        }
    }
};
</script>

<style scoped>
.mouse-follow-text {
    height: 100vh;
}
</style>