//import Home from './components/Home.vue'
import Body from './components/Body.vue'
import Aboutus from './components/Aboutus.vue'
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
        path: '/chat', 
        component: Chat 
    }
    
]

