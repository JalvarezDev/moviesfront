import { createApp } from 'vue'
import App from './App.vue'
import '../public/index.css'
import router from './router/router'
import store from './store/store'

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


createApp(App)
    .use(router)
    .mount('#app')
