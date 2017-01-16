<template>
  <div>
    <md-toolbar>
      <md-button v-show="windowSize=='small'" class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">Admin管理</h2>
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
      'windowSize'
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
