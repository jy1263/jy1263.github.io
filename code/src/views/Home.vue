<template>
  <div class="home">
    <div class="topper">
      <img class="pfp" alt="Vue logo" src="https://github.com/jy1263.png">
      <div class="title">Hi, I'm Amy. A student based in Sydney who likes to mess around with music stuff. <br> Here's a lil page for my accounts.</div>
    </div>
    <Social class="social"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Social from '@/components/Social.vue'

export default {
  name: 'Home',
  components: {
    Social
  }
}
</script>

<style lang="less" scoped>
.topper {
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}
.home {
  flex-direction: column;
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
  border-radius: 100%;
  margin: 8px;
}
.social {
  justify-self: flex-end;
  margin-bottom: auto;
  display: flex;
  margin: 8px;
}
img {
  height: 52.8%;
}
</style>
