<template>
  <main>
    <transition name="move">
      <pm-notification v-show="showNotification">
        <p slot="body">No se encontraron resultados</p>
      </pm-notification>
    </transition>
    <Spinner v-show="isLoading"></Spinner>
    <section class="section">
      <nav class="nav">
        <div class="container " v-show="!isLoading">
          <div class="field has-addons">
            <p class="control">
              <input type="text" class="input is-large" placeholder="Buscar Canciones" v-model="searchQuery" @keyup.enter="search">
            </p>
            <p class="control">
              <a class="button is-info is-large" v-on:click="search">Buscar</a>
              <a class="button is-danger is-large" v-on:click="clear">Borrar</a>
            </p>
          </div>
        </div>
        <div v-show="!isLoading" class="container results">
          <p class="is-4">{{searchMessage}}</p>
          <div class="columns is-multiline">
            <div class="column is-one-quarter" v-for="t in tracks">
              <pm-track 
                v-blur="t.preview_url"
                :class="{'is-active': t.id == selectedTrack}"
                :track="t" 
                @select="setSelectedTrack"></pm-track>
            </div>
          </div>
        </div>
      </nav>
    </section>
    
  </main>
</template>

<script>
import trackService from '@/services/track'
import Spinner from '@/components/Spinner.vue'
import pmTrack from '@/components/Track.vue'
import pmNotification from '@/components/shared/Notification.vue'
export default {
  name: 'app',
  components: {
    Spinner,
    pmTrack,
    pmNotification
  },
  data () {
    return {
      isLoading: false,
      showNotification : false,
      searchQuery: '',
      tracks: [],
      selectedTrack:''
    }
  },
  created () {
    console.log('...created')
  },
  mounted () {
    console.log('...mounted')
  },
  methods: {
    search () {
      this.isLoading = true
      if (!this.searchQuery) {return}
      trackService.search(this.searchQuery)
      .then((result) => {
        this.showNotification = result.tracks.total === 0
        this.tracks = result.tracks.items
        this.isLoading = false
      })
    },
    clear () {
      this.searchQuery = ''
      this.tracks = ''
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },
  computed: {
    searchMessage() {
      return `${this.tracks.length} Registros encontrados`
    }
  },
  watch:{
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000);
      }
    }
  }
}
</script>

<style lang="scss">
.results {
  margin: 40px;
}
.is-active {
  border: 3px #23d160 solid;
}
</style>
