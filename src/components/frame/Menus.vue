<template>
  <md-list>
    <md-list-item>
      <router-link to="/">Home</router-link>
    </md-list-item>

    <md-list-item>
      <router-link to="/test">test</router-link>
    </md-list-item>

    <md-list-item>
      <router-link to="/xxx">404</router-link>
    </md-list-item>

    <md-list-item>
      <span>More</span>
      <md-list-expand>
        <md-list>
          <md-list-item class="md-inset">World</md-list-item>
          <md-list-item class="md-inset">Americas</md-list-item>
          <md-list-item class="md-inset">Europe</md-list-item>
        </md-list>
      </md-list-expand>
    </md-list-item>

  </md-list>
</template>

<script>
  export default {}
</script>

<style lang="less"></style>
