<template>
  <div>
    <md-snackbar class="md-warn" md-position="top right" ref="snackbar" md-duration="300000">
      <span>{{msg}}</span>
      <md-button class="md-raised md-primary" @click="$refs.snackbar.close()">Retry</md-button>
    </md-snackbar>
  </div>
</template>
<style>

</style>
<script>
  export default{
    data() {
      return {
        msg: 'hello vue'
      }
    },
    methods: {
      open() {
        this.$refs.snackbar.open()
      }
    },
    components: {}
  }
</script>
