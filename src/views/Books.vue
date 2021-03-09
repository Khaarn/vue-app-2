<template>
  <div id="Books">
    <ListeBooks />
  </div>
</template>

<script>
import ListeBooks from '@/components/ListeBooks.vue'

export default {
  name: 'Books',
  components: {
    ListeBooks
  }
}
</script>

<style>
#Books {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>