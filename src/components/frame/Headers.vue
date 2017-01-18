<template>
<div id="header">
  <md-whiteframe id="toolbars" md-elevation="2">
    <md-toolbar>
      <md-button v-show="windowSizeDesc=='small'" class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">Admin</h2>
      <md-button class="md-icon-button">
        <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>
  </md-whiteframe>
  <md-sidenav class="md-left" ref="leftSidenav">
    <menus></menus>
  </md-sidenav>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
var Menus = require('components/frame/Menus.vue')
export default {
  data() {
    return {}
  },
  computed: mapGetters([
    'windowSizeDesc'
  ]),
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle()
    }
  },
  components: {
    Menus
  },
  watch: {
    '$store.state.toggleSideNav': function() {
      this.$refs.leftSidenav.close()
    }
  }
}
</script>
<style>
#toolbars {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
  overflow: visible;
}
</style>
