<template>
  <div id="home">
    <div>{{msg}}</div>
  </div>
</template>
<style>
  #home {
    height: 1000px;
  }
</style>
<script>
  import Mock from 'mockjs'
  export default{
    data() {
      return {
        msg: Mock.mock('@ctitle')
      }
    },
    components: {}
  }
</script>
