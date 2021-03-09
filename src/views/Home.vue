<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/books.png">
    <HomePage msg="J-M Soler Project"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'Home',
  components: {
    HomePage
  }
}
</script>
