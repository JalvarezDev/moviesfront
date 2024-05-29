<template class="bg-blue-950">
    <div class="flex flex-wrap justify-center bg-blue-950 mb-1 h-fit">
      <Movie v-for="(movie, index) in movies" :movie="movie" :index="index"></Movie>
    </div>
</template>

<script lang="ts">
import {defineComponent, watch} from 'vue';
import Movie from "@/components/Movie.vue";

export default defineComponent({
    name: 'Movies',
    components: {
      Movie
    },
    props: {
        movies: Array,
    },

  setup(props) {
    watch(() => props.movies, (newVal) => {
      if (newVal && newVal.length > 0) {
        console.log(newVal);
      }
    });
  }



});



</script>
