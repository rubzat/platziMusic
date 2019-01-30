<template>
  <div id="app">
    <pm-header></pm-header>
    <router-view></router-view>
    <pm-footer></pm-footer>
  </div>
</template>

<script>
import pmFooter from '@/components/layout/Footer.vue'
import pmHeader from '@/components/layout/Header.vue'
export default {
  name: 'app',
  components: {
    pmFooter,
    pmHeader
  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';
.results {
  margin: 40px;
}
.is-active {
  border: 3px #23d160 solid;
}
.move-enter-active, .move-leave-active {
  transform: translateX(0);
  transition: all .3s linear;
}
.move-enter, .move-leave-to {
  transform: translateX(100%)
}
</style>
