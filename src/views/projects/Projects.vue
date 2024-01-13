<template>
<div class="content">
    <h1>Projets</h1>
    <div class="jeux-text">
        <h2>Jeux</h2>
        <hr size="6" width="80%" color="#2f2f30">
    </div>
    <section class="projects">
        <article v-for="project in projects">
            <img :src="project.thumbnail" alt="project_thumbnail">
            <p class="normal">{{ project.description }}</p>
            <button>En savoir plus</button>
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