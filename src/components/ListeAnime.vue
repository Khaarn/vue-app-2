<template>
  <div>
    <h1>Mes Animes</h1>
    <button v-on:click="getAnimesData">Récupérer mes Animes</button>
    <div>{{AnimesDataList}}</div>
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

<style scoped>

</style>