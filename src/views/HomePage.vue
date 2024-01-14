<template>
    <div class="container mx-auto">
        <h1 class="text-center my-12 text-6xl">Portfolio de Thibaud Lebrasseur</h1>
        <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2 indent-12 ml-32 text-justify">
                <p>Je m’appelle Thibaud, j’ai 20 ans et je suis actuellement en 2e année de BUT informatique à
l’IUT Grand Ouest Normandie de l’Université de Caen. Mon objectif dans cette formation est de
réaliser des projets numériques de manière professionnelle.
Mon parcours a débuté en seconde, et je ne savais pas où m’orienter, je me suis dirigé vers
un Bac général avec option Littérature dans le but de devenir illustrateur, mais le monde
informatique m’intéressait bien plus. C’est alors qu’en première, je décide donc de me diriger vers
un Bac STI2D.</p><br>
<p>J’ai beaucoup aimé cette filière et mon activité préférée était le développement
informatique, de même en Terminale, j’ai beaucoup aimé coder dans les projets réalisés. De plus, je
me suis mis depuis cette période à programmer de mon côté des petits mods sur Minecraft ainsi que
le développement d’un petit jeu et cela m’a confirmé l’idée que je voulais avancer dans ce domaine.
Après avoir obtenu mon baccalauréat STI2D, je me suis tourné vers le BUT Informatique, car je
voulais me professionnaliser dans le domaine de la programmation.</p><br>
<p>Dans la vie, j’aime des choses diverses et variées, mais ce qui me passionne le plus c’est
l’informatique et les jeux vidéo, je joue souvent avec mes amis sur différents jeux qui me plaisent.
D’ailleurs, mes jeu vidéo préférés sont Animal Crossing et Minecraft, car ce sont des jeux très
reposants, sans prise de tête et créatifs.</p><br>
<p>Si je devais me représenter en tant qu’animal, je dirais un chat,
car je suis quelqu’un de calme, reposé et surtout patient. Je m’occupe
moi-même d’un chat et je ne saurais pas ce que serait ma vie
aujourd’hui sans elle.</p><br>
<p>Je suis également très intéressé par les pays étrangers et
j’adorerais étudier ou travailler dans certains pays, notamment dans
des pays frais et souvent enneigés comme par exemple les pays
scandinaves ou bien le Canada.</p>
            </div>
            <div class="ml-12">
                <RoundedImage src="/src/assets/thibaud.jpeg" />
            </div>
        </div>
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