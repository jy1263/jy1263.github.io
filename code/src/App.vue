<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition name="fade" mode="out-in"> 
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
}
</script>

<style lang="less">
#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

html {
  background: #15202b;
  height: 100%;
}

body {
  margin: 0px;
  height: 100%;

}

#nav {
  padding: 30px;
  position: static;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #e22c78;
    }
  }
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.25s ease;
}

.fade-leave {}

.fade-leave-active {
  transition: opacity 0.25s ease;
  opacity: 0;
}

</style>
