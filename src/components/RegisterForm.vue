<template>
  <div class="flex items-center justify-center h-screen">
    <form @submit.prevent="onRegister" class="flex flex-col w-96 p-8 border border-gray-300 rounded-md bg-white">
      <h2 class="mb-6 text-2xl font-bold text-center">Register ACCOUNT</h2>
      <input v-model="UserName" class="mb-6 p-3 border border-gray-300 rounded-md text-lg" type="text" placeholder="UserName " required>
      <input v-model="Password" class="mb-6 p-3 border border-gray-300 rounded-md text-lg" type="password" placeholder="Password" required>
      <input v-model="Mail" class="mb-6 p-3 border border-gray-300 rounded-md text-lg" type="email" placeholder="Email" required>
      <button class="p-3 text-white bg-blue-500 rounded-md cursor-pointer text-lg" type="submit">REGISTER</button>
      <p class="pt-6 text-center text-lg">You have an account, </p>
      <router-link to="/login" class="text-blue-500 text-center pt-2 text-lg">Login</router-link>
    </form>
  </div>
</template>




<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'RegisterForm',
  props: {
    onReset: {
      type: Function,
      default: () => {}
    }
  },
  setup(_,{emit}) {
    const UserName = ref('');
    const Password = ref('');
    const Mail = ref('');

    const onRegister = () => {
      emit('register', {name: UserName.value, password: Password.value, email: Mail.value});
      UserName.value = '';
      Password.value = '';
      Mail.value = '';
    }

    return {
      UserName,
      Password,
      Mail,
      onRegister,
    }
  }

});

</script>
