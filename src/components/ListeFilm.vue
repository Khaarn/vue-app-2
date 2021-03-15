<template>
  <div>
    <h1>Mes Films</h1>
    <button v-on:click="getFilmsData">Récupérer mes Films</button>
    <div v-for="FilmsData in FilmsDataList" :key="FilmsData.id" class="Films-data">
      <div>
        <span class="Film-titre">{{ FilmsData.titre }}</span>
      </div>
      <div class="réalisateur">
        <span class="Film-réalisateur">Réalisateur : </span>
        <span>{{ FilmsData.réalisateur }}</span>
      </div>
      <div class="genre">
        <span class="Film-genre">Genre : </span>
        <span>{{ FilmsData.genre }}</span>
      </div>
      <div class="status">
        <span class="Film-status">Status : </span>
        <span>{{ FilmsData.status }}</span>
      </div>
      <div class="gauche">
        <div>
          <span class="Film-date_sortie">Date de sortie : </span>
          <span>{{ FilmsData.date_sortie }}</span>
        </div>
      </div>
      <div class="droite">
        <div>
          <span class="Film-date_derniere_vue">Date de la dernière vue : </span>
          <span>{{ FilmsData.date_derniere_vue }}</span>
        </div>
      </div>
      <div>
        <span class="Film-temps_total">Temps du film : </span>
        <span>{{ FilmsData.temps_total }}</span>
      </div>

      <div class="resumer">
        <span class="Film-resumer">Resumer du film : </span>
        <span class="Film-resumer-data">{{ FilmsData.resumer }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListeFilm",
  data() {
    return {
      FilmsDataList: []
    };
  },
  methods: {
    getFilmsData() {
      fetch("/json/film.json", {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }})
          .then(response => response.json())
          .then(data => (this.FilmsDataList = data))
          .catch(function(error) {
            console.log(error)
          }
          )
    },
  }
};
</script>

<style>
.Film-réalisateur, .Film-titre, .Film-date_sortie, .Film-date_derniere_vue, .Film-genre, .Film-resumer, .Film-status, .Film-temps_total {
  font-weight: bold;
}
.Films-data {
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
.Film-titre{
  font-size: xx-large;
}
.réalisateur,.status,.genre{
  font-size: large;
}

</style>