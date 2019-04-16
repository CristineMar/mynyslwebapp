<template>
  <div>
   <v-toolbar color="teal" dark fixed app flat>
     <img class="nysl" alt="NYSL logo" src="../assets/logo.png">
    </v-toolbar>
    <template>

    <v-toolbar color="teal" dark fixed app flat>
      <img class="nysl" alt="NYSL logo" src="../assets/logo.png">
      
      <h4><strong>NORTH YOUTH SOCCER LEAGUE</strong></h4>

      <!--<<v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>-->

      <template v-slot:extension>
      
        <v-tabs color="teal white--text" grow  fixed>
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <!-- <v-tab to="/"> Home </v-tab> -->
            <!-- <router-link to="/" >Home</router-link> -->
          <v-tab to="/"> Game Schedule </v-tab>
            <!-- <router-link to="/game">Game Schedule</router-link> -->
          <v-tab to="/aboutus"> About Us </v-tab>
            <!-- <router-link to="/aboutus">About Us</router-link> -->
          <v-tab to="/login"> Chat </v-tab>
        </v-tabs> 

      </template>
    </v-toolbar>
    </template>
  </div>
</template>
 

<script>


export default {
  name: 'Header',
  data () {
    return {
        
      } 
      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

img {
  width: 50px;
}

h4 {
  text-align: center;
  margin-left: 10px;
}
    
</style>