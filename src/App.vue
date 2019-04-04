<template>
<div>
  <app-header></app-header>
  <router-view></router-view>
  <app-footer></app-footer>
</div>
</template>


<script>
import Header from './components/Header.vue';
//import Home from './components/Home.vue';
//import Body from './components/Body.vue';
//import Aboutus from './components/Aboutus.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    'app-header': Header,
    //'app-home': Home,
    //'app-body': Body,
    //'app-aboutus': Aboutus,
    'app-footer': Footer
  },
  data () {
    return {
      
      } 
      
    }
}
</script>










<style>



</style>