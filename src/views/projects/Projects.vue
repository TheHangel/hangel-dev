<template>
<h1 class="text-center">Projets</h1>
<section class="flex flex-wrap m-24">
    <article
        v-for="project in projects"
        class="bg-white w-64 h-64 shadow-lg rounded-lg m-8"
    >
        <img :src="project.thumbnail" alt="Description" class="w-full">
        <div class="text-center p-4">
            <p class="text-black">{{ project.description }}</p>
        </div>
        <div class="text-center">
            <a href="#" class="inline-block w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">En savoir plus</a>
        </div>
    </article>
</section>
</template>

<script>
import projects from '@/constants/projects';

export default {
    setup() {
        return {
            projects
        }
    }
}

</script>