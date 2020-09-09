<template>
  <div class="social">
      <a href="https://github.com/jy1263">Github</a>
      <a href="https://twitter.com/jy126orjy126">Twitter</a>
      <a href="https://www.instagram.com/owotter.jy1263/">Instagram</a>
      <a href="https://github.com/jy1263/jy1263.github.io">This Repository</a>
      <a href="https://app.matter.online/artists/@owotter">Matter Music</a>
      <a href="https://open.spotify.com/artist/15HdoPMP89EsIfIvN1coko?si=pCaGNeQBQDagLPsoQaD41A">Spotify</a>
      <a href="https://soundcloud.com/owotter">Soundcloud</a>
      <a href="https://soundcloud.com/owotterwip">WIP Soundcloud</a>
      <a href="https://www.youtube.com/watch?v=ucbx9we6EHk">If it isn't clear enough</a>
  </div>
</template>

<script>
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
  }
}
</style>
