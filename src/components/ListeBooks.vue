<template>
  <div>
    <h1>Mes livres</h1>
    <button v-on:click="getBooksData">Récupérer mes livres</button>
    <div>{{BooksDataList}}</div>
  </div>
</template>

<script>
export default {
  name: "ListeBooks",
  data() {
    return {
      BooksDataList: []
    };
  },
  methods: {
    getBooksData() {
      fetch("/json/books.json", {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }})
          .then(response => response.json())
          .then(data => (this.BooksDataList = data))
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