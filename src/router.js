//import Home from './components/Home.vue'
import Body from './components/Body.vue'
import Aboutus from './components/Aboutus.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import Chat from './components/Chat.vue'
import store from '@/store'
//import firebase from 'firebase'


export default [
    // { 
    //     path:'/', 
    //     component: Home 
    // },
    { 
        path: '/', 
        component: Body 
    },
    { 
        path: '/aboutus', 
        component: Aboutus 
    },
    { 
        path: '/login',
        name: 'Login',
        component: Login,
    },
    { 
        path: '/signup',
        name: 'SignUp',
        component: SignUp 
    },
    { 
        path: '/chat', 
        name: 'Chat', 
        component: Chat, 
        meta: {
            auth: true
        },
        beforeEach: (to, from, next) => {
            if (next.meta.auth && !store.state.currentUser) {
                next({
                    path: '/login'
                })
            } else {
                next()
            }
        }
    }
]

