<template>
    <div>
        <h1 class="text-center mr-96 -ml-80 mt-24 text-6xl">Portfolio de Thibaud Lebrasseur</h1>
    </div>
    <div class="flex justify-end items-center h-screen mr-24">
        <RoundedImage src="/src/assets/thibaud.jpeg" />
    </div>
</template>

<script>
import RoundedImage from '@/components/RoundedImage.vue';

export default {
    components: {
        RoundedImage
    }
}

</script>