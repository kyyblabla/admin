<template>
  <div>
    <md-list>
      <md-list-item v-for="route in routeList">
        <router-link :to="route.path">{{route.name}}</router-link>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
  import { routes } from 'src/router'
  export default {
    data() {
      return {
        routes: []
      }
    },
    computed: {
      routeList: () => routes.filter(r => r.showMenu)
    },
    mounted: function () {
      this.$nextTick(function () {
        this.routes = routes
        console.log(routes)
      })
    }
  }
</script>

<style lang="less"></style>
