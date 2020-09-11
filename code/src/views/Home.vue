<template>
  <div class="home">
    <div class="topper">
      <img class= "pfp" alt="Vue logo" src="https://github.com/jy1263.png">
    </div>
    <div class="title">Hi, I'm Amy. A student based in Sydney who likes to mess around with music stuff. <br> Here's a lil page for my accounts.</div>
    <Social class="social"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Social from '@/components/Home/Social.vue'
export default {
  name: 'Home',
  components: {
    Social
  }
}
</script>

<style lang="less" scoped>
.topper {
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 8px;
}
.home {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
.title {
  color: #e22c78;
  margin: 8px;
  font-size: 20pt;
}
.pfp {
  position: relative;
  max-height: 50vh;
  max-width: 50vh;
  width: auto;
  overflow: hidden;
  border-radius: 100%;
}
</style>
