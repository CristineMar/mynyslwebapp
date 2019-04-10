<template>
   <v-footer dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-title class="teal lighten-1 white--text justify-center flex"  flat tile>
            <v-btn v-for="icon in icons" :key="icon.url" class="mx-3 white--text" dark icon :href="icon.url" target="_blank">
                 <v-icon>{{ icon.name }}</v-icon>
              </v-btn>
          </v-card-title> 

          <v-btn absolute dark fab top right color="green" >
              <v-icon>chat</v-icon>
            </v-btn>

        <v-card-actions class="grey darken-3 justify-center"> 
          <strong> {{ copyright }} </strong>
        </v-card-actions>
      </v-card>
    </v-footer>
</template>


<script>

export default {
  name: 'Footer',
  data: () => ({
        copyright:'Copyright 2019 - Cristine Marquez',
        icons: [
        {
            name:'fab fa-facebook',
            url: 'https://www.facebook.com/#',
        },
        {
            name:'fab fa-github',
            url: 'https://github.com/#',
        },
        {
            name:'fab fa-linkedin',
            url: 'https://www.linkedin.com/in/#',
        },
        {
            name:'fab fa-instagram',
            url: 'https://www.instagram.com/#',
            
        },
        {
            name: 'fas fa-envelope',
            url:'mailto:nysl@chisoccer.org'
        }
      ]
    })
}
</script>




<style scoped>

v-icon {
  color: black;
}

</style>