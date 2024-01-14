<template>
    <div class="p-2 bg-white rounded-full shadow-lg">
      <img :src="src" alt="Image Description" class="rounded-full border-2 border-white" />
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        }
    }
}
</script>  