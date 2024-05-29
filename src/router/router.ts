import {createRouter, createWebHistory} from 'vue-router'
import store from "@/store/store";

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: { requiresAuth: true },
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path:'/index',
        name:'Index',
        meta: { requiresAuth: true },
        component:()=>import('../views/Index.vue')
    },
    {
        path:'/login',
        name:'Login',
        component:()=>import('../views/Login.vue')
    },
    {
        path:'/register',
        name:'Register',
        component:()=>import('../views/Register.vue')
    },
    {
        path:'/favs',
        name:'favs',
        component:()=>import('../views/Favs.vue')
    }
    ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
    // Comprueba si la ruta requiere autenticación y el usuario no está autenticado
    if (to.matched.some(record => record.meta.requiresAuth) && !store.state.isAuthenticated) {
        // Redirige al usuario a la página de inicio de sesión
        next({ name: 'Login' })
    } else {
        // Permite el acceso a la ruta
        next()
    }
})
export default router