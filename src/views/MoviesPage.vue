<template>
  <div class="home">
    <title>NontonKuy</title>
    <div class="movies-list mt-3">
      <div class="movie" v-for="movie in items" :key="movie.id">
        <router-link :to= "'movie/' + movie.id" class="movie-link">
        <!-- {movie/${movie.id}} -->
          <img :src= "movie.image" alt="movieList" width="180px" class="mt-4">
          <div class="movie-detail">
            <h4 class="fulltitle mb-0 fw-bold">{{ movie.title }}</h4>
            <p class="year mb-0">{{ movie.year }}</p>
            <p class="rating mb-0">imDb Rating: {{ movie.imDbRating }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view/>
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
      });
    }
  }
}
</script>

<style lang="less">
  .movie{
    display: block;
    margin: 0 auto;
    align-items: center;
    text-align: center;
  }

  .movie-link {
    text-decoration: none;
  }
  
  .movie-detail {
    h4, p {
      color: #292929;
    }
  }
</style>
