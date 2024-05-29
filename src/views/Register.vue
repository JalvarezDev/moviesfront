<template>
  <div class="bg-blue-950">
<ErrorPop v-if="registerError" :error-message="registerError" @destroy="destroy"></ErrorPop>
    <RegisterForm @register="handleRegister"></RegisterForm>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import RegisterForm from "@/components/RegisterForm.vue";
import ErrorPop from "@/components/ErrorPop.vue";



export default defineComponent({
  name: 'Register',
  components: {
    RegisterForm,
    ErrorPop,
  },

  methods:{
    async handleRegister(payload: any) {
      const res = await fetch("http://localhost:3000/auth/createUser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.message != 'User already exists') {
        console.log('Recurso creado correctamente:');
        this.$router.push('/login');
      } else {
        window.alert("Error al crear el recurso: El usuario ya existe");
        this.registerError = 'El usuario ya existe';

      }
    },

    destroy() {
      this.registerError = '';
    }

  },
  data() {
    return {
      registerError: ''
    }
  }
});

</script>


