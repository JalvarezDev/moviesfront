

<template>
  <div class="bg-blue-950">
    <LoginForm @login="handleLogin"></LoginForm>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm   from "@/components/LoginForm.vue";
import store from "@/store/store";
import ErrorPop from "@/components/ErrorPop.vue";

export default defineComponent({
  name: 'Login',
  components: {LoginForm},
  methods: {
    async handleLogin(payload: any) {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      console.log(data.message)
      if (data.message != 'User logged in'){
        window.alert("Error al inicar seison");
      } else {
        store.commit('setAuthenticated', true);
        localStorage.setItem('token', data.token);
        this.$router.push('/index');

      }

    }
  },
  setup() {
    return {

    }
  }
});


</script>
