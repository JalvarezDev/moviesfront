<template>
  <div style="height:500px" class=" p-2 bg-gray-200 w-80 pb-2 m-2 overflow-hidden rounded">
    <div  class="h-32">
      <h3 class="font-black text-2xl">{{movie.Title}}</h3>
      <p>Year: {{ movie.Year }}</p>
      <p>Type: {{ movie.Type }}</p>
      <img :src="movie.Poster">
    </div>

  </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MovieIndex',
  props: {
    movie: Object,
  }
});

</script>