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

                 <v-data-table :headers="headers" :items="players" :search="search">

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

                    <template v-slot:items="props">
                      <td class="text-xs-left">{{ props.item.day }}</td>
                      <td class="text-xs-left">{{ props.item.teams }}</td>
                      <td class="text-xs-left"><a :href="props.item.url">{{ props.item.location }}</a></td>
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

export default {
  name: 'App',
  data () {
    return {
      search: '',
      headers: [
        { text: 'Day', value: 'day'},
        { text: 'Teams', value: 'teams' },
        { text: 'Location', value: 'location'},
        { text: 'Time' }
      ],
      players: [
        {
          day: '9/01',
          teams: 'U1 VS U4',
          location: 'AJ Katzenmaier Elementary',
          url: 'https://www.google.com/maps/place/AJ+Katzenmaier+Elementary/@41.9002288,-87.6312581,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd34e07f69da7:0x15e198c063fc787c!8m2!3d41.9002288!4d-87.6290694',
          time: '9:30 a.m to 1:00 p.m'
        },
        {
          day: '9/01',
          teams: 'U3 VS U2',
          location: 'Greenbay Elementary',
          url: 'https://www.google.com/maps/place/Greenbay+Elementary/@42.1170735,-88.0335307,10z/data=!4m8!1m2!2m1!1sGreenbay+Elementary!3m4!1s0x880fd3407260c45b:0xb351205fae50c6f3!8m2!3d41.9138647!4d-87.6378335',
          time: '9:30 a.m to 1:00 p.m'
        },
        {
          day: '9/08',
          teams: 'U5 VS U6',
          location: 'Marjorie P Hart Elementary',
          url:'https://www.google.com/maps/place/Marjorie+P+Hart+Elementary/@41.9296229,-87.6481614,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd30f2637f9d7:0xdbff5d5dfcfcfa35!8m2!3d41.9296229!4d-87.6459727',
          time: '9:30 a.m to 1:00 p.m'
        },
        {
          day: '9/08',
          teams: 'U6 VS U1',
          location: 'Marjorie P Hart Elementary',
          url:'https://www.google.com/maps/place/Marjorie+P+Hart+Elementary/@41.9296229,-87.6481614,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd30f2637f9d7:0xdbff5d5dfcfcfa35!8m2!3d41.9296229!4d-87.6459727',
          time: '9:30 a.m to 1:00 p.m'
        },
        {
          day: '9/15',
          teams: 'U2 VS U4',
          location: 'North Elementary',
          url:'https://www.google.com/maps/place/North+Elementary/@41.9071449,-87.6483116,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd33af14860a5:0x5736e62f19086c62!8m2!3d41.9071449!4d-87.6461229',
          time: '9:30 a.m to 1:00 p.m'
        },
        {
          day: '9/15',
          teams: 'U3 VS U5',
          location: 'AJ Katzenmaier Elementary',
          url: 'https://www.google.com/maps/place/AJ+Katzenmaier+Elementary/@41.9002288,-87.6312581,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd34e07f69da7:0x15e198c063fc787c!8m2!3d41.9002288!4d-87.6290694',
          time: '9:30 a.m to 1:00 p.m'
        },
        {
          day: '9/22',
          teams: 'U1 VS U3',
          location: 'AJ Katzenmaier Elementary',
          url: 'https://www.google.com/maps/place/AJ+Katzenmaier+Elementary/@41.9002288,-87.6312581,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd34e07f69da7:0x15e198c063fc787c!8m2!3d41.9002288!4d-87.6290694',
          time: '9:30 a.m to 1:00 p.m'
        },
        {
          day: '9/22',
          teams: 'U2 VS U6',
          location: 'South Elementary',
          url: 'https://www.google.com/maps/place/St+James+Lutheran+School/@41.9200687,-87.6529923,16.9z/data=!4m5!3m4!1s0x880fd3196e269cbf:0x1caabcbc4893f0da!8m2!3d41.9201486!4d-87.6506755',
          time: '9:30 a.m to 1:00 p.m'
        },
        {
          day: '9/29',
          teams: 'U1 VS U4',
          location: 'Greenbay Elementary',
          url: 'https://www.google.com/maps/place/Greenbay+Elementary/@42.1170735,-88.0335307,10z/data=!4m8!1m2!2m1!1sGreenbay+Elementary!3m4!1s0x880fd3407260c45b:0xb351205fae50c6f3!8m2!3d41.9138647!4d-87.6378335',
          time: '9:30 a.m to 1:00 p.m'
        },
        {
          day: '10/06',
          teams: 'U2 VS U5',
          location: 'Marjorie P Hart Elementary',
          url:'https://www.google.com/maps/place/Marjorie+P+Hart+Elementary/@41.9296229,-87.6481614,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd30f2637f9d7:0xdbff5d5dfcfcfa35!8m2!3d41.9296229!4d-87.6459727',
          time: '9:30 a.m to 1:00 p.m'
        },
        {
          day: '10/06',
          teams: 'U1 VS U6',
          location: 'South Elementary',
          url: 'https://www.google.com/maps/place/St+James+Lutheran+School/@41.9200687,-87.6529923,16.9z/data=!4m5!3m4!1s0x880fd3196e269cbf:0x1caabcbc4893f0da!8m2!3d41.9201486!4d-87.6506755',
          time: '9:30 a.m to 1:00 p.m'
        },
        {
          day: '10/13',
          teams: 'U3 VS U4',
          location: 'Howard A Yeager Elementary',
          url:'https://www.google.com/maps/place/Howard+A+Yeager+Elementary/@41.923261,-87.6651102,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd2e37f852467:0xb6cb22b2f0358874!8m2!3d41.923261!4d-87.6629215',
          time: '9:30 a.m to 1:00 p.m'
        },
        {
          day: '10/13',
          teams: 'U5 VS U1',
          location: 'Green Bay Elementary',
          url: 'https://www.google.com/maps/place/Greenbay+Elementary/@42.1170735,-88.0335307,10z/data=!4m8!1m2!2m1!1sGreenbay+Elementary!3m4!1s0x880fd3407260c45b:0xb351205fae50c6f3!8m2!3d41.9138647!4d-87.6378335',
          time: '9:30 a.m to 1:00 p.m'
        },
        {
          day: '10/20',
          teams: 'U2 VS U4',
          location: 'Marjorie P Hart Elementary',
          url:'https://www.google.com/maps/place/Marjorie+P+Hart+Elementary/@41.9296229,-87.6481614,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd30f2637f9d7:0xdbff5d5dfcfcfa35!8m2!3d41.9296229!4d-87.6459727',
          time: '9:30 a.m to 1:00 p.m'
        },
        {
          day: '10/20',
          teams: 'U6 VS U3',
          location: 'North Elementary',
          url:'https://www.google.com/maps/place/North+Elementary/@41.9071449,-87.6483116,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd33af14860a5:0x5736e62f19086c62!8m2!3d41.9071449!4d-87.6461229',
          time: '9:30 a.m to 1:00 p.m'
        },
        {
          day: '10/27',
          teams: 'U5 VS U6',
          location: 'Howard A Yeager Elementary',
          url:'https://www.google.com/maps/place/Howard+A+Yeager+Elementary/@41.923261,-87.6651102,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd2e37f852467:0xb6cb22b2f0358874!8m2!3d41.923261!4d-87.6629215',
          time: '9:30 a.m to 1:00 p.m'
        }
      ]
      } 
      
    },
    select: function(person) {
  window.location.href = person.url;
}

}
</script>










<style scoped>

</style>