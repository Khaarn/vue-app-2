<template>
  <div>
    <h1>Mes Mangas</h1>
    <b-button v-on:click="getMangasData">Récupérer mes Mangas</b-button>
    <div v-for="mangasData in MangasDataList" :key="mangasData.id" class="mangas-data">
      <div>
        <span class="manga-titre">{{ mangasData.titre }}</span>
      </div>
      <div class="auteur">
        <span class="manga-auteur">Auteur : </span>
        <span>{{ mangasData.auteur }}</span>
      </div>
      <div class="genre">
        <span class="manga-genre">Genre : </span>
        <span>{{ mangasData.genre }}</span>
      </div>
      <div class="status">
        <span class="manga-status">Status : </span>
        <span>{{ mangasData.status }}</span>
      </div>
      <div class="gauche">
        <div>
          <span class="manga-date_dernière_publication">Date de dernière publication : </span>
          <span>{{ mangasData.date_dernière_publication }}</span>
        </div>
        <div>
          <span class="manga-page_totale">Nombre de chapitres actuellement sortie : </span>
          <span>{{ mangasData.page_totale  }}</span>
        </div>
      </div>
      <div class="droite">
        <div>
          <span class="manga-date_derniere_lecture">Date de la dernière lecture : </span>
          <span>{{ mangasData.date_derniere_lecture }}</span>
        </div>
        <div>
          <span class="manga-derniere_page_lu">Numéro du dernier chapitre lu : </span>
          <span>{{ mangasData.derniere_page_lu }}</span>
        </div>
      </div>
      <div class="resumer">
        <span class="manga-resumer">Resumer du manga : </span>
        <span class="manga-resumer-data">{{ mangasData.resumer }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListeManga",
  data() {
    return {
      MangasDataList: []
    };
  },
  methods: {
    getMangasData() {
      fetch("json/manga.json", {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }})
          .then(response => response.json())
          .then(data => (this.MangasDataList = data))
          .catch(function(error) {
            console.log(error)
          }
          )
    },
  }
};
</script>

<style>
.manga-auteur, .manga-titre, .manga-date_dernière_publication, .manga-date_derniere_lecture, .manga-genre, .manga-resumer, .manga-status, .manga-temps_total, .manga-derniere_page_lu, .manga-page_totale{
  font-weight: bold;
}
.mangas-data {
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
.manga-titre{
  font-size: xx-large;
}
.auteur,.status,.genre{
  font-size: large;
}
</style>