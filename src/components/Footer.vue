<template>
  <footer>
         <v-card-title class="teal lighten-1 white--text justify-center flex"  flat tile>
            <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon :href="icon.url">
                <v-icon size="25px" lighten-1 white--text>{{ icon.name }}</v-icon>
              </v-btn>
          </v-card-title>

    <v-footer  dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-actions class="grey darken-3 justify-center"> <strong> {{copyright}} </strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </footer>
</template>


<script>

export default {
  name: 'App',
  data: () => ({
        network: 'Get connected with us!',
        copyright:'Copyright 2019 - Cristine Marquez',
        icons: [
        {
            name:'fab fa-facebook',
            url: 'https://www.facebook.com/cristine.santiago.28',
        },
        {
            name:'fab fa-github',
            url: 'https://github.com/cristinepaula',
        },
        {
            name:'fab fa-linkedin',
            url: 'https://www.linkedin.com/in/cristine-marquez/',
        },
        {
            name:'fab fa-instagram',
            url: 'https://www.instagram.com/mealux_28/',
            
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