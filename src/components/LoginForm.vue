
<template>
  <div class="flex items-center justify-center h-screen">
    <form @submit.prevent="onLogin" class="flex flex-col w-96 p-8 border border-gray-300 rounded-md bg-white">
      <h2 class="mb-6 text-2xl font-bold text-center">LOG ACCOUNT</h2>
      <input v-model="UserName" class="mb-6 p-3 border border-gray-300 rounded-md text-lg" type="text" placeholder="UserName " required>
      <input v-model="Password" class="mb-6 p-3 border border-gray-300 rounded-md text-lg" type="password" placeholder="Password" required>
      <button class="p-3 text-white bg-blue-500 rounded-md cursor-pointer text-lg" type="submit">LOGIN</button>
      <p class="pt-6 text-center text-lg">Do not have an account, </p>
      <router-link to="/register" class="text-blue-500 text-center pt-2 text-lg">Register</router-link>
    </form>
  </div>
</template>




<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginForm',
  setup(_,{emit}) {
    const UserName = ref('');
    const Password = ref('');

    const onLogin = () => {
      emit('login', {name: UserName.value, password: Password.value});
    }

    return {
      UserName,
      Password,
      onLogin
    }
  }

});

</script>
```