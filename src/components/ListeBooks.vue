<template>
  <div>
    <h1>Mes Livres</h1>
    <b-button v-on:click="getBooksData">Récupérer mes livres</b-button>
    <div v-for="BooksData in BooksDataList" :key="BooksData.id" class="books-data">
      <div>
        <span class="book-titre">{{ BooksData.titre }}</span>
      </div>
      <div class="auteur">
        <span class="book-auteur">Auteur : </span>
        <span>{{ BooksData.auteur }}</span>
      </div>
      <div class="genre">
        <span class="book-genre">Genre : </span>
        <span>{{ BooksData.genre }}</span>
      </div>
      <div class="status">
        <span class="book-status">Status : </span>
        <span>{{ BooksData.status }}</span>
      </div>
      <div class="gauche">
        <div>
          <span class="book-date_publication">Date de publication : </span>
          <span>{{ BooksData.date_publication }}</span>
        </div>
        <div>
          <span class="book-page_totale">Nombre de page totale : </span>
          <span>{{ BooksData.page_totale }}</span>
        </div>
      </div>
      <div class="droite">
        <div>
          <span class="book-date_derniere_lecture">Date de la dernière lecture : </span>
          <span>{{ BooksData.date_derniere_lecture }}</span>
        </div>
        <div>
          <span class="book-derniere_page_lu">Dernière page lu : </span>
          <span>{{ BooksData.derniere_page_lu }}</span>
        </div>      </div>


      <div class="resumer">
          <span class="book-resumer">Resumer du livre : </span>
          <span class="book-resumer-data">{{ BooksData.resumer }}</span>
        </div>
    </div>
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
      fetch("../json/books.json", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
          .then(response => response.json())
          .then(data => (this.BooksDataList = data))
          .catch(function (error) {
                console.log(error)
              }
          )
    },
  }
};
</script>

<style>
.book-auteur, .book-titre, .book-date_publication, .book-date_derniere_lecture, .book-genre, .book-resumer, .book-status, .book-page_totale, .book-derniere_page_lu {
  font-weight: bold;
}
.books-data {
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
.book-titre{
  font-size: xx-large;
}
.auteur,.status,.genre{
  font-size: large;
}

</style>