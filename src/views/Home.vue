<template>
  <div class=" w-screen">
    <HomeBody v-if="!movies ||!movies.length"></HomeBody>

    <div>
    <Movies class="pt-20" :movies="movies"></Movies>
    </div>

  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from 'vue';
import Movies from '../components/Movies.vue';
import HomeBody from "@/components/HomeBody.vue";
import {useRoute} from "vue-router";




export default defineComponent({
  name: 'App',
  components: {
    HomeBody,
    Movies
  },

  setup() {
    const route = useRoute();
    let query = route.params.query;
    console.log(query, "esta es la query")

    if (Array.isArray(query)) {
      query = query[0];
    }

    // Aquí puedes manejar el cambio en el input de búsqueda
    console.log(query);

    const movies = ref([]);
    const getMovies = async (query: string) => {
      // Si no hay consulta, regresar inmediatamente
      if (!query || query === 'undefined' || query === 'null' || query === '') {
        return;
      }
      const res = await fetch(`http://www.omdbapi.com/?apikey=899b29e6&s=${encodeURIComponent(query)}`);
      const data = await res.json();
      console.log(data.Search, 'data');
      movies.value = data.Search;
      console.log(movies.value, 'movies');
    }

    watch(() => route.params.query, (newQuery) => {
      if (Array.isArray(newQuery)) {
        newQuery = newQuery[0];
      }

      // Si newQuery no es undefined, llamar a getMovies
      if (newQuery) {
        getMovies(newQuery);
      }
    }, { immediate: true });

     getMovies(query);
    //console.log(movies.value, 'movies');
    return {
      movies,

    }
  },



  //899b29e6

});

</script>