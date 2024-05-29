<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 fixed w-screen z-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link to="/index" > <h1  class="text-4xl font-black text-white hover:scale-110 duration-100">Movie Repository</h1></router-link>
      <form v-if="isAuthenticated" @submit.prevent="onSearch">
      <input type="search" class="border-2 border-gray-200 dark:border-gray-700 p-2 rounded-lg " v-model="searchQuery" placeholder="Search movies name">
        <button class="font-semibold bg-white border-1 border-black w-16 h-8 rounded ml-2 hover:scale-110 duration-100" type="submit">Search</button>
      </form>
      <div v-if="!isAuthenticated" ><ul><router-link to="/login"><li class="text-2xl  text-white bg-blend-luminosity hover:underline hover:scale-110 duration-100 ">Login/Register</li></router-link></ul>
      </div>
      <div v-if="isAuthenticated" ><ul><router-link to="/favs"><li class="text-2xl  text-white bg-blend-luminosity hover:underline hover:scale-110 duration-100 ">Favs</li></router-link></ul></div>
      <div v-if="isAuthenticated" @click="logout" ><ul><li class="text-2xl  text-white bg-blend-luminosity hover:underline hover:scale-110 duration-100 ">Logout</li></ul>
      </div>
    </div>

  </nav>

</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue';
import router from "@/router/router";
import store from "@/store/store";

export default defineComponent({
  name: 'Header',
  setup(_,{emit}) {
    const searchQuery = ref(''); // Variable para almacenar el valor del input de búsqueda

    const onSearch = () => {
      // Emitir evento con el valor actual del input
      emit('search-change', searchQuery.value);
    };

    const logout = () => {
      // Eliminar el token de acceso
      localStorage.removeItem('token');
      store.commit('setAuthenticated', false);
      // Redirigir al usuario a la página de inicio de sesión
      router.push({ name: 'Login' });
    };

    const isAuthenticated = computed(() => store.state.isAuthenticated);
    return {
      searchQuery,
      onSearch,
      isAuthenticated,
      logout
    }
  }
});
</script>

