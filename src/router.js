//import Home from './components/Home.vue'
import Body from './components/Body.vue'
import Aboutus from './components/Aboutus.vue'
import Login from './components/Login.vue'
// import SignUp from './components/SignUp.vue'
import Chat from './components/Chat.vue'


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
        component: Login 
    },
    // { 
    //     path: '/signup',
    //     name: 'Signup',
    //     component: SignUp
    // },
    { 
        path: '/chat', 
        name: 'Chat', 
        component: Chat, 
        props: true,
        beforeEnter: (to, from, next) => {
            if(to.params.name){
                next()
            } else {
                next({ name: 'Login' })  //to riderect to login if you dont enter a name
            }
        }
    },
]