<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>Essential Links 123</h2>
    <select v-model="selectPais">
      <option v-for="pais in paises" :value="pais.value">{{pais.name}}</option>
    </select>
    <spinner v-show="loading"></spinner>
    <ul>
      <artista v-for="artista in artistas" v-bind:artista="artista" :key="artista.mbid"></artista>
    </ul>
  </div>
</template>

<script>
import Spinner from './components/Spinner.vue'
import Artista from './components/Artist.vue'
import getArtistas from './api'

export default {
  name: 'app',
  data () {
    return {
      msg: 'welcome to platziMusic',
      artistas : [],
      paises : [
        { name: 'Mexico', value: "mexico"},
        { name: 'España', value: "spain"}
      ],
      selectPais:"spain",
      loading: true
    }
  },
  components :{
    Artista,
    Spinner
  },
  methods: {
    refrescarArtistas() {
      const self = this
      this.loading = true
      getArtistas(this.selectPais)
        .then((result) => {
          console.log(result)
          self.artistas = result.artist
          self.loading = false
        }).catch((err) => {
            console.log(err);
        });
    }
  },
  mounted: function() {
    this.refrescarArtistas()
  },
  watch: {
    selectPais: function () {
      this.refrescarArtistas()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
