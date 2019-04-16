//import Home from './components/Home.vue'
import Body from './components/Body.vue'
import Aboutus from './components/Aboutus.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import Chat from './components/Chat.vue'
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
            requiresAuth: true
        },
        props: true, //this code is for users to not be able to enter chat by writing in the url /chat to obligate users to ener a name to eneter chat room.
        beforeEnter: (to, from, next) => {
           if(to.params.name){
                 next()
             } else {
                 next({ name: 'Login' })  //to riderect to login if you don't enter a name.
            }
        }
    }
]


