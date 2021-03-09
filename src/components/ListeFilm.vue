<template>
  <div>
    <h1>Mes Films</h1>
    <button v-on:click="getFilmsData">Récupérer mes Films</button>
    <div>{{FilmsDataList}}</div>
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

<style scoped>

</style>