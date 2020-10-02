<template>
  app
  <Jsx />
</template>

<script lang="ts">
import Jsx from './components/Jsx'

export default {
  name: 'App',
  components: {
    Jsx,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
