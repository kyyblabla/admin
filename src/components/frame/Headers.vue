<template>
  <div>
    <md-toolbar>
      <md-button v-show="windowSizeDesc=='small'" class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">Admin</h2>
      <md-button class="md-icon-button">
        <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <menus></menus>
    </md-sidenav>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  var Menus = require('components/frame/Menus.vue')

  export default {
    computed: mapGetters([
      'windowSizeDesc'
    ]),
    methods: {
      toggleLeftSidenav() {
        this.$refs.leftSidenav.toggle()
      },
      open(ref) {
      },
      close(ref) {
      },
      onResize(e) {
        console.log(e)
      }
    },
    components: {
      Menus
    }
  }
</script>


<style></style>
