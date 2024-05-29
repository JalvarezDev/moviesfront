<template>
  <div class="w-screen h-screen bg-blue-950">

    <div class="flex flex-wrap justify-center bg-blue-950 mb-1 h-fit pt-20">
      <!--<Movies class="pt-20" :movies="favs" @removeFavourite="handleFavourite()"></Movies>-->
      <MovieFav v-for="movie in favs" :movie="movie" @removeFavourite="handleFavourite()"></MovieFav>
    </div>

  </div>
</template>
<script>
import { defineComponent, ref, watch } from 'vue';
import Movies from "@/components/Movies.vue";
import MovieFav from "@/components/MovieFav.vue";

export default defineComponent({
  name: 'Favs',
  components: {Movies, MovieFav},

  setup() {
    const favs = ref([]);
    const getFavs = async () => {
      const res = await fetch('http://localhost:3000/auth/favmovies', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      favs.value = data;
    }
    getFavs();

    return{
      favs,
      getFavs
    }
  },
  methods: {
    handleFavourite() {
      this.getFavs()
    }
  }
});
</script>