<template>
  <div :class="divClass" class="flex p-2 w-80 h-fit m-2 hover:scale-105 duration-150 rounded bg-gray-200">
    <div class="h-fit text-center">
      <div class="h-32 overflow-clip ">
        <h3 class="font-black text-2xl">{{movie.Title}}</h3>
        <p>Year: {{ movie.Year }}</p>
        <p>Type: {{ movie.Type }}</p>
      </div>
      <img class="justify-center rounded" style="height: 400px; width: 300px;" :src="movie.Poster">
      <button  @click="removeFavourite" type="button" class="mt-5 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
        <span>Remove From Favourites</span>
      </button>
    </div>
  </div>


</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import store from "@/store/store";

export default defineComponent({
  name: 'MovieFav',
  props: {
    movie: Object,
  },

  setup(props, {emit})
  {


    const showButton = ref(true);
    const removeFavourite = () => {

      store.commit('removeMovie', props.movie);
      showButton.value = false;
      emit('removeFavourite');
    }
      return {
        removeFavourite,
        showButton

      }
  }
});


</script>
