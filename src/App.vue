<template>
  <div id="app">
    <headers></headers>
    <div id="content">
      <md-layout md-gutter>
        <md-layout md-column md-hide-small md-flex="20">
          <md-whiteframe md-elevation="2">
            <menus></menus>
          </md-whiteframe>
        </md-layout>
        <md-layout md-column md-flex-small="100" md-flex="80">
          <div>
            <md-button @click="add">add</md-button>
          </div>
        </md-layout>
      </md-layout>
    </div>
  </div>
</template>

<script>
  require('vue-material/dist/vue-material.css')
  var Menus = require('components/frame/Menus.vue')
  var Headers = require('components/frame/Headers.vue')
  var mapActions = require('vuex').mapActions
  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      Headers,
      Menus
    },
    methods: {
      ...mapActions([
        'resize'
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
      })
    }
  }
</script>

<style lang="less">
</style>
