<template>
  <div class="about">
    <h1>Error 404: Have a nice day.</h1>
    <Donut />
    Spinning Donut Code is by <a href="https://www.a1k0n.net/2011/07/20/donut-math.html">a1k0n</a>
  </div>
</template>
<script>
// @ is an alias to /src
import Donut from '@/components/Donut.vue'
export default {
  
  name: 'About',
  components: {
    Donut
  },
  data() {
      return {
      }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
a {
  color: #2C3E50;
}
</style>
