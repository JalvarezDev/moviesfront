<template>
  <div class="pt-10">

    <HomeIndex></HomeIndex>
    <MoviesIndex :movies="movies"></MoviesIndex>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import MoviesIndex from "@/components/MoviesIndex.vue";
import HomeIndex from "@/components/HomeIndex.vue";

export default defineComponent({
  name: 'Index',
  components: {HomeIndex, MoviesIndex},

  setup(){
    const movies = ref([])
    async function getMostRatedMovies(searchString: string = 'kung fu panda') {
      try {
        const res =  await fetch(`http://www.omdbapi.com/?apikey=899b29e6&s=${encodeURIComponent(searchString)}`);
        const data = await res.json();
        console.log(data, 'data');
        movies.value = data.Search;
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    }

    (async () => {
      await getMostRatedMovies();
    })();

    return{
      movies
    }
  }
});
</script>
```