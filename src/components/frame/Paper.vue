<template lang="html">
<md-whiteframe md-elevation="2" class="m-paper">
    <p>{{text}}</p>
    <div>
      <img :src="imageSrc" alt="">
    </div>
</md-whiteframe>
</template>

<script>
import Mock from 'mockjs'
export default {
  data() {
    return {
      text: Mock.mock('@cparagraph'),
      imageSrc: Mock.mock('@image')
    }
  },
  computed: {
    rotate() {
      return 2
    }
  }
}
</script>

<style lang="css">
.m-paper{
  width: 80%;
  padding: 10px;
}
</style>
