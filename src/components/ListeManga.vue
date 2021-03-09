<template>
  <div>
    <h1>Mes Mangas</h1>
    <button v-on:click="getMangasData">Récupérer mes Mangas</button>
    <div>{{MangasDataList}}</div>
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
      fetch("/json/manga.json", {
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

<style scoped>

</style>