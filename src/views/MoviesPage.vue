<template>
  <div class="home">
    <div class="movies-list mt-3">
      <div class="movie mt-2" v-for="movie in items" :key="movie.id">
        <img :src= "movie.image" alt="movieList" width="180px">
      </div>
    </div>
  </div>
</template>

<script>

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
      fetch("https://imdb-api.com/en/API/Top250Movies/k_b2gtgwdv")
      // https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>
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
  img {
    width: 40%;
    display: block;
    margin: 0 auto;
  }


</style>
