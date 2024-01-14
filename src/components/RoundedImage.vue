<template>
    <div class="p-2 bg-white rounded-full shadow-lg">
      <img
            :src="src"
            alt="Image Description"
            class="rounded-full border-2 border-white"
            :class="[width, height]"
        />
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
        width: {
            type: String,
            default: 'w-96'
        },
        height: {
            type: String,
            default: 'h-96'
        }
    }
}
</script>  