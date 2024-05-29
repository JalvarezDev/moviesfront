<template>
  <div id="app" class="h-screen w-screen">
    <Header class="z-10" @search-change="onSearchChange"></Header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Header from './components/Header.vue';
import { useRouter } from 'vue-router';
import store from "@/store/store";

export default defineComponent({
  name: 'App',
  components: {
    Header,

  },
  setup() {
    const router = useRouter();
    const onSearchChange = (query: string) => {
      if (!query || query === 'undefined' || query === 'null' || query === '') {
        return;
      }
      // Emitir evento con el valor actual del input
      router.push({ name: 'Home', params: { query } });
    }

    return {
      onSearchChange,
    }
  },

  mounted() {
    const token = localStorage.getItem('token')

    if (token) {
      // Si hay un token, verifica si es válido
      fetch('http://localhost:3000/auth/verify-token', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
          .then(response => response.json())
          .then(data => {
            if (data.isAuthenticated) {
              // Si el token es válido, considera al usuario como autenticado
              store.commit('setAuthenticated', true)
            }
          })
          .catch((error : any) => {
            console.error(error);
          });
    }
  }
});

</script>

