<template>
  <div>
    <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex>
            <!--<v-tooltip left>
            </v-tooltip>-->
            <v-tooltip right>
              <template v-slot:activator="{ on }">

                 <v-card-title>
                    <!--<v-spacer></v-spacer>-->
                    <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details>
                    </v-text-field>
                  </v-card-title>

                   <v-data-table :headers="headers" :items="players['players']" :search="search"> 

                    <template slot="headerCell" slot-scope="props">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <span v-on="on">
                            {{ props.header.text }}
                          </span>
                        </template>
                        <span>
                          {{ props.header.text }}
                        </span>
                      </v-tooltip>
                    </template>

                     <template v-slot:items="props">  <!-- Props are the way components can accept data from components that include them (parent components). When a component expects one or more prop, it must define them in its props property. -->
                      <td class="text-xs-left">{{ props.item.day }}</td>
                      <td class="text-xs-left">{{ props.item.teams }}</td>
                      <td class="text-xs-left"><a :href="props.item.url" target="_blank">{{ props.item.location }}</a></td>
                      <td class="text-xs-left">{{ props.item.time }}</td>
                    </template>

                  </v-data-table>  
          
              </template>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    </v-app>
  </div>
</template>




<script>

import { mapState } from 'vuex';

export default {
  name: 'Body',
  data () {
    return {
      search: '',
      headers: [
        { text: 'Day', value: 'day'},
        { text: 'Teams', value: 'teams' },
        { text: 'Location', value: 'location'},
        { text: 'Time', value: 'time' }
      ],
    }
  },
      
/*So, what I have done is when the component is created, we call the store’s action.
In our case that action is loadPlayers.
So, it will fetch the players and commit the mutation called SET_players.
This mutation set our Vue.js application state’s players array to the fetched players.
Now, that players we map here inside computed properties.
Finally, loop through all the players and display it as a table format.*/
      created () {
        this.$store.dispatch('loadPlayers')
        
      },
      computed: mapState([
        'players'
     ]),
      
    select: function(person) {
      window.location.href = person.url;
}

}
</script>

<style scoped>


</style>