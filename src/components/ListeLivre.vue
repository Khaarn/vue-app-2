<template>
  <div>
    <h1>Mes Livres</h1>
    <button v-on:click="getBooksData">Récupérer les livres</button>
    <div>{{BooksDataList}}</div>
  </div>
</template>

<script>
export default {
  name: "ListeLivre",
  data() {
    return {
      BooksDataList: []
    };
  },
  methods: {
    getBooksData() {
      fetch("@/Json/books.json")
          .then(response => response.json())
          .then(data => (this.BooksDataList = data));
    }
  }
};
</script>

<style scoped>

</style>