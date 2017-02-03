<template>
<div id="header">
  <md-whiteframe id="toolbars" md-elevation="2">
    <md-toolbar>
      <md-button v-show="windowSizeDesc=='small'" class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">Admin</h2>
      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>

      <md-spinner v-show="ajaxing" md-indeterminate :md-size="20" class="md-accent"></md-spinner>
      <md-menu md-size="4">
        <md-avatar md-menu-trigger>
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3515113604,2578688710&fm=116&gp=0.jpg" alt="Avatar" md-menu-trigger>
        </md-avatar>
        <md-menu-content>
          <md-menu-item>
            <md-icon>settings</md-icon>
            <span>Setting</span>
          </md-menu-item>
          <md-menu-item>
            <md-icon>close</md-icon>
            <span>Exit</span>
          </md-menu-item>
        </md-menu-content>
      </md-menu>

    </md-toolbar>
  </md-whiteframe>
  <md-sidenav class="md-left" ref="leftSidenav">
    <menus></menus>
  </md-sidenav>
</div>
</template>

<script>
import Menus from 'components/frame/Menus.vue'
import {
  mapGetters
} from 'vuex'
export default {
  data() {
    return {}
  },
  computed: mapGetters([
    'windowSizeDesc',
    'ajaxing'
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
<style lang="less">
#toolbars {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 99;
    overflow: visible;
}
</style>
