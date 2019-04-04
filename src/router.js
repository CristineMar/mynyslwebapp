import Home from './components/Home.vue'
import Body from './components/Body.vue'
import Aboutus from './components/Aboutus.vue'

export default [
    { path:'/', component: Home },
    { path: '/game', component: Body },
    { path: '/aboutus', component: Aboutus }
]