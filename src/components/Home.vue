<template>
  <div id="home">
    <p>{{msg}}</p>
    <div id="papers">
      <paper></paper>
    </div>
  </div>
</template>
<style>
  #home {
    height: 1000px;
  }
</style>
<script>
  import Paper from 'components/frame/Paper'
  import Mock from 'mockjs'
  export default {
    data() {
      return {
        msg: Mock.mock('@ctitle')
      }
    },
    components: {
      Paper
    }
  }
</script>
