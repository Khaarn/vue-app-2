<template>
  <div>
    <h1>Mes Animes</h1>
    <button v-on:click="getAnimesData">Récupérer mes Animes</button>
    <div v-for="AnimesData in AnimesDataList" :key="AnimesData.id" class="animes-data">
      <div>
        <span class="animes-titre">{{ AnimesData.titre }}</span>
      </div>
      <div class="auteur">
        <span class="animes-auteur">Auteur : </span>
        <span>{{ AnimesData.auteur }}</span>
      </div>
      <div class="genre">
        <span class="animes-genre">Genre : </span>
        <span>{{ AnimesData.genre }}</span>
      </div>
      <div class="status">
        <span class="animes-status">Status : </span>
        <span>{{ AnimesData.status }}</span>
      </div>
      <div class="gauche">
        <div>
          <span class="animes-date_diffusion">Date de la première diffusion : </span>
          <span>{{ AnimesData.date_diffusion }}</span>
        </div>
        <div>
          <span class="animes-nombre_episode">Nombre d'épisodes totale : </span>
          <span>{{ AnimesData.nombre_episode }}</span>
        </div>
      </div>
      <div class="droite">
        <div>
          <span class="animes-date_derniere_vue">Date de la dernière vue : </span>
          <span>{{ AnimesData.date_derniere_vue }}</span>
        </div>
        <div>
          <span class="animes-dernier_episode_vu">Dernier épisode vu : </span>
          <span>{{ AnimesData.dernier_episode_vu }}</span>
        </div>
      </div>
      <div class="resumer">
        <span class="animes-resumer">Synopsis de l'anime : </span>
        <span class="animes-resumer-data">{{ AnimesData.resumer }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListeAnime",
  data() {
    return {
      AnimesDataList: []
    };
  },
  methods: {
    getAnimesData() {
      fetch("/json/anime.json", {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }})
          .then(response => response.json())
          .then(data => (this.AnimesDataList = data))
          .catch(function(error) {
            console.log(error)
          }
          )
    },
  }
};
</script>

<style>
.animes-auteur, .animes-titre, .animes-date_diffusion, .animes-date_derniere_vue, .animes-genre, .animes-resumer, .animes-status, .animes-nombre_episode, .animes-dernier_episode_vu {
  font-weight: bold;
}
.animes-data {
  border-bottom: 1px solid black;
  margin-top: 2em;
}
.gauche {
  float: left;
  width: 50%;
  margin: 0;
}

.droite {
  width: 50%;
  margin-left: 50%;
}
.resumer{
  margin-top: 1em;
}
.animes-titre{
  font-size: xx-large;
}
.auteur,.status,.genre{
  font-size: large;
}

</style>