<template>
  <div>

   <v-toolbar color="teal" dark fixed app>
     <img class="nysl" alt="NYSL logo" src="../assets/logo.png">
    </v-toolbar>
    <template>
    

    <v-toolbar color="teal" dark fixed app>
      <img class="nysl" alt="NYSL logo" src="../assets/logo.png">
      
      <h1><strong>NORTH YOUTH SOCCER LEAGUE</strong></h1>
      
      
      <!--<<v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>-->

      <template v-slot:extension>

        <v-tabs v-model="tab" color="teal white--text" grow >
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab to="/"> Home </v-tab>
            <!--<router-link to="/" >Home</router-link>-->
          <v-tab to="/game"> Game Schedule </v-tab>
            <!--<router-link to="/game">Game Schedule</router-link>-->
          <v-tab to="/aboutus"> About Us </v-tab>
            <!--<router-link to="/aboutus">About Us</router-link>-->
        </v-tabs>

      </template>

    </v-toolbar>
  
    </template>
  </div>

</template>


<script>


export default {
  data () {
    return {
        
      } 
      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

img {
  width: 45px;
}

h1 {
  padding-left: 1%;
  flex-grow: 1;
}
    
</style>