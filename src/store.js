import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        user: null,
        userId: null
    },
    mutations: {
        authUser (state, res) {
            state.token = res.data.data.token
            state.userId = res.data.data.id
        },
        clearAuth (state) {
            state.token = null
            state.userId = null
        },
    },
    getters: {
        user (state) {
            return state.user
        },
        ifAuthenticated (state) {
            // return state.token
            return state.token !== null
        },
    },
    actions: {
        signup ({commit}, formData) {
            axios.post('http://vuespa.localhost/api/register', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                c_password: formData.c_password,
                returnSecureToken: true
            })
                .then(res => {
                    // console.log(res)
                    localStorage.setItem('token', res.data.data.token)
                    localStorage.setItem('userId', res.data.data.id)
                    commit('authUser', res)
                    router.push("/create")
                })
                .catch(error => console.log(error))
        },
        login ({commit}, formData) {
            axios.post('http://vuespa.localhost/api/login', formData)
                .then(res => {
                    // console.log(res.data.data)
                    localStorage.setItem('token', res.data.data.token)
                    // commit('updateAccessToken', res.data.token)
                    // axios.defaults.headers.common['Authorization'] = res.data.token
                    localStorage.setItem('userId', res.data.data.id)
                    commit('authUser', res)
                   router.push({name: 'Homepage'})
                })
                .catch(error => console.log(error))
        },
        raw ({commit}, data) {
            console.log(data)
            const token = 'Bearer ' + localStorage.getItem('token');
            console.log(token)
            const self = this
            axios.post('http://vuespa.localhost/api/backends', JSON.stringify(data)
            ,{
                headers: {
                    Authorization: token
                }
                })
                .then(res => {
                    console.log(res.data)
                    commit('authUser', res)
                    const status = res.data.success;
                    console.log(status)
                    self.GetRaw = res.data.data.raw_json;
                    console.log(self.GetRaw)

                    router.push({name: 'Preview', params: {data : self.GetRaw}})
                })
                .catch(error => console.log(error))
        },
        logout ({commit}) {
            commit('clearAuth')
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            router.replace('/')
        },
        AutoLogin ({commit}) {
            const userId = localStorage.getItem('userId')
            const token = localStorage.getItem('token')
            if (!token) {
                return
            }
            commit('authUser', {
                token: token,
                userId: userId
            })
        }
    }
})