<template>
  <div id="app">
    <headers></headers>
    <md-layout id="m-container">
      <md-whiteframe md-elevation="2" id="menus" v-show="windowSizeDesc!='small'">
        <menus></menus>
      </md-whiteframe>
      <div id="placeholder-box" v-show="windowSizeDesc!='small'">
      </div>
      <div id="contents">
        <router-view class="view"></router-view>
      </div>
    </md-layout>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import router from './router'
  require('vue-material/dist/vue-material.css')
  var Menus = require('components/frame/Menus.vue')
  var Headers = require('components/frame/Headers.vue')
  export default {
    name: 'app',
    data() {
      return {}
    },
    computed: mapGetters([
      'windowSizeDesc'
    ]),
    components: {
      Headers,
      Menus
    },
    methods: {
      ...mapActions([
        'resize',
        'toggleSideNav'
      ]),
      onResize(e) {
        this.resize({'width': window.innerWidth, 'height': window.innerHeight})
      },
      add() {
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        window.addEventListener('resize', this.onResize)
        window.addEventListener('load', this.onResize)
      })
      //
      router.afterEach(route => {
        this.toggleSideNav()
      })
    }
  }
</script>

<style lang="less">
  @header-height: 64px;
  @menu-width: 250px;
  #menus {
    position: fixed;
    top: @header-height;
    left: 0;
    bottom: 0;
    width: @menu-width;
  }

  #placeholder-box {
    width: @menu-width;
  }

  #contents {
    padding-top: @header-height;
    flex: 1;
  }
</style>
