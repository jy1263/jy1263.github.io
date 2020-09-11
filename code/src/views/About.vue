<template>
  <div class="about">
    <Donut />
    <pre id="d" style="background-color:#000; color:#ccc; font-size: 10pt;"></pre>
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
  mounted() {
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
