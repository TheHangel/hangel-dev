<template>
    <h1 class="text-center">Projets</h1>
    <div class="flex justify-center items-center">
        <section class="flex flex-wrap justify-center mt-0 mb-4">
            <div v-for="project in projects" class="m-8">
                <article class="bg-white w-72 h-80 shadow-lg rounded-t-lg">
                    <img
                        :src="project.thumbnail"
                        alt="Description"
                        class="w-full"
                    >

                    <p class="text-center font-bold text-lg pt-4 text-black">{{ project.name }}</p>
                    <p class="text-center text-slate-500 pt-2">{{ project.categorie }} - {{ project.date }}</p>
                    <p class="text-center pt-2 px-6 text-black text-justify">{{ project.description }}</p>
                    
                </article>
                <a
                    :href="project.link"
                    class="inline-block bg-button text-center w-full bg-blue-500 text-slate-700 py-2 px-4 rounded hover:bg-button-hover"
                >
                    En savoir plus
                </a>

            </div>
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