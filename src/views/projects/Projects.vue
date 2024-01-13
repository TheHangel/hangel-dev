<template>
    <h1 class="text-center">Projets</h1>
    <div class="flex justify-center items-center">
        <section class="flex flex-wrap justify-center mt-0 mb-4">
            <article
                v-for="project in projects"
                class="bg-white w-64 h-72 shadow-lg rounded-lg m-8"
            >
                <img
                    :src="project.thumbnail"
                    alt="Description"
                    class="w-full"
                >

                <p class="text-center font-bold text-lg pt-4 text-black">{{ project.name }}</p>
                <p class="text-center p-4 text-black text-justify">{{ project.description }}</p>

                <div class="text-center">
                    <a href="#" class="inline-block w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">En savoir plus</a>
                </div>
                
            </article>
        </section>
    </div>
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