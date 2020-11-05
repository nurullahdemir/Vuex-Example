

<template>
  <div id="app">
<h1>{{getNameSurnameWith}}</h1>
<input v-model="person.name"/>
<input v-model="person.surname">
<button @click="updateData">Güncelle</button>
  </div>
</template>

<script>

import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  data(){
    return{
      person: {
      name:'nurullah',
      surname:'demir'}
    }
  },
  computed:{
...mapState([
  'name',
  'surname'
]),
...mapGetters([
  'getNameSurnameWith'
])
  },
  components: {
  },
  methods:{
    ...mapActions([
      'updateNameSurname'
    ]),
    updateData(){
this.updateNameSurname(this.person)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
