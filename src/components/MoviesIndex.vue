<template>
  <div class="flex flex-wrap justify-center bg-blue-950 pt-52 h-fit">
    <MovieIndex v-for="movie in movies" :movie="movie"></MovieIndex>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Movie from './Movie.vue';
import MovieIndex from "@/components/MovieIndex.vue";
export default defineComponent({
  name: 'MoviesIndex',
  components: {
    MovieIndex,
    Movie
  },
  props: {
    movies: Array,
  },




});



</script>