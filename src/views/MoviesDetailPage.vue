<template>
  <div class="movie-detail" :key="movie.id">
    <h2>{{ id }}</h2>
    <router-view/>
  </div>
</template>

<script>
import env from '@/env.js'
import router from '@/router'
// import { useRoute } from 'vue-router'

export default {
  name: 'MovieDetail',
  // const route = useRoute(),
  data () {
    return {
      items: {
        id: "",
        fullTitle: ""
      }
    }
  },

  mounted () {
    this.fetchMovieList()
    console.log(router.currentRoute.params.id)
    console.log(router)
  },

  methods: {
    fetchMovieList() {
      fetch(`https://imdb-api.com/en/API/MostPopularMovies/${env.apikey}`)
      // fetch(`https://imdb-api.com/en/API/MostPopularMovies/${env.apikey}&i=${route.params.id}&plot=full`)
      .then(response => response.json())
      .then(data => {
          this.items = data.items
          console.log(data.items)
      });
    }
  }
}
</script>




<style lang="less">
  
</style>