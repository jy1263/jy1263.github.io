<template>
  <div class="social">
      <a href="https://github.com/jy1263"><span class="mdi mdi-github"/>Github</a>
      <a href="https://twitter.com/jy126orjy126"><span class="mdi mdi-twitter"/>Twitter</a>
      <a href="https://www.instagram.com/ayanamy.jy1263/"><span class="mdi mdi-instagram"/>Instagram</a>
      <a href="https://github.com/jy1263/jy1263.github.io"><span class="mdi mdi-github"/>This Repository</a>
      <a href="https://open.spotify.com/artist/15HdoPMP89EsIfIvN1coko?si=pyuDsYIpRcu2AHDYVYIn-Q"><span class="mdi mdi-spotify"/>Spotify</a>
      <a href="https://ayanamy.bandcamp.com/"><span class="mdi mdi-bandcamp"/>Bandcamp</a>
      <a href="https://app.matter.online/artists/@ayanamy"><span class="mdi mdi-music-circle"/>Matter Music</a>
      <a href="https://soundcloud.com/owotter"><span class="mdi mdi-soundcloud"/>Soundcloud</a>
      <a href="https://soundcloud.com/owotterwip"><span class="mdi mdi-soundcloud"/>WIP Soundcloud</a>
      <a href="https://www.youtube.com/watch?v=ucbx9we6EHk"><span class="mdi mdi-youtube"/>If it isn't clear enough</a>
  </div>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css';
export default {
  name: 'Social',
  props: {
    msg: String
  },
  data() {
    return {
      links: [
        {"name": "Github", "link": "https://github.com/jy1263/"},
        {"name": "Twitter", "link": "https://twitter.com/jy126orjy126/"},
        {"name": "Instagram", "link": "https://www.instagram.com/owotter.jy1263/"},
        {"name": "This Repository", "link": "https://github.com/jy1263/jy1263.github.io"},
      ]
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.social {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 8px;
  & a {
    border-radius: 8px;
    border: 0px;
    padding: 5px 15px;
    margin: 4px;
    color: #e22c78;
    overflow-wrap: none;
    font-size: 15pt;
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    text-decoration: none;
    & .mdi {
      margin-right: 4px;
    }
  }
}
</style>
