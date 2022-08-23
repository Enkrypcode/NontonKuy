<template>
  <div class="home">
    <div class="movies-list mt-3">
      <div class="movie" v-for="movie in items" :key="movie.id">
        <img :src= "movie.image" alt="movieList" width="180px" class="mt-4">
        <div class="movie-detail">
          <h4 class="fulltitle mb-0 text-white fw-bold">{{ movie.title }}</h4>
          <p class="year mb-0 text-white">{{ movie.year }}</p>
          <p class="rating mb-0 text-white">imDb Rating: {{ movie.imDbRating }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import env from '@/env.js'

export default {
  name: 'MovieList',
  data () {
    return {
      items: {}
    }
  },

  mounted () {
    this.fetchMovieList()
  },

  methods: {
    fetchMovieList() {
      fetch(`https://imdb-api.com/en/API/MostPopularMovies/${env.apikey}`)
      .then(response => response.json())
      .then(data => {
          this.items = data.items
          console.log(data.items)
          // console.log(data)
      });
    }
  }
}
</script>

<style lang="less">
  // img {
  //   width: 40%;
  //   display: block;
  //   margin: 0 auto;
  // }

  .movie{
    display: block;
    margin: 0 auto;
    align-items: center;
    text-align: center;
  }


</style>
