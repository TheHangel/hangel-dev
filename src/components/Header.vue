<template>
    <header>
        <div class="topnav">
            <router-link :to="{ name: 'home' }">
                <a class="home" href="/">Accueil</a>
            </router-link>
            <router-link :to="{ name: 'projects' }">
                <a class="active">Projets</a>
            </router-link>
        </div>
    </header>
</template>