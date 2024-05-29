import { createStore } from 'vuex';

interface Movie {
    title: string;
    year: string;
    type: string;
    poster: string;
}


export default createStore({
    state: {
        isAuthenticated: !!localStorage.getItem('token'),
    },
    mutations: {
        setAuthenticated(state: { isAuthenticated: boolean }, value: boolean) {
            state.isAuthenticated = value;
        },

        addMovie(state, movie: Movie) {
            fetch(`http://localhost:3000/auth/add-movie`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },

            body: JSON.stringify(movie)})
        },

        removeMovie(state, movie: Movie) {
            fetch(`http://localhost:3000/auth/delete-movie`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(movie)
        })

}}});