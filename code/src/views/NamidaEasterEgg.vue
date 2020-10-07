<template>
  <div class="namida">
    <pre id="d" style="background-color:#000; color:#ccc; font-size: 12pt;">{{namida}}</pre>
    <!-- <video v-show="showContent" autoplay :currentTime.prop="14" @playing="loaded" onloadeddata="this.volume=0.1;">
      <source src="https://r2---sn-ntqe6n7k.googlevideo.com/videoplayback?expire=1601996224&ei=YDF8X5bkB8CAx_AP-4ub6AE&ip=212.40.116.104&id=o-ADmMJtylikquGZHi9JdGYytLKUE0cBjhkBTnY-5mP6a-&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=16908792&ratebypass=yes&dur=236.820&lmt=1577637777516883&fvip=2&fexp=23915654&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgEv1JR_2Sr8dYdkExqRSkyPnYBy8cGjt5OMVSSMtHyCYCIQD6ZBIZ2sxBVNdgAepJN9Jl3gU6VYA5aUzWoYfl2oln8A%3D%3D&title=%E3%80%90%E5%88%9D%E9%9F%B3%E3%83%9F%E3%82%AF%E3%80%91%E3%80%80%E3%83%9E%E3%82%B8%E3%82%AB%E3%83%AB%E3%83%89%E3%82%AF%E3%82%BF%E3%83%BC%E3%80%80%E3%80%90%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%8A%E3%83%AB%E3%80%91&cm2rm=sn-v2u0n-ntqy7l,sn-v2u0n-ntqk7l&req_id=e9abfbc35ea3a3ee&redirect_counter=2&cms_redirect=yes&mh=0b&mip=110.33.231.169&mm=30&mn=sn-ntqe6n7k&ms=nxu&mt=1601974585&mv=m&mvi=2&pl=18&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgFVUMAAJFQNYSejU5Rat9VcICvp6MNCU5VmP7DXybddwCIQD51HI63AV7FZwt4FWxm-hsuttX-Qo6OxAAih89rQxV-g%3D%3D">
    </video> -->
    <div v-show="showContent" class="container">
        <youtube :video-id="'8PfynGMrxcE'" ref="youtube" @buffering="buffering()" @playing="loaded()" :player-vars="playerVars" class="video"></youtube>
    </div>
    <br>
    <a v-show="showContent" href="https://www.youtube.com/watch?v=Y0EcKR05Ac4">Magical Doctor</a>
    <pre id="warning" style="background-color:#000; color:#ccc; font-size: 11pt;">epilepsy warning</pre>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'NamidaEasterEgg',
  components: {
  },
  data() {
    return {
        namida: "Please enable autoplay for audio.",
        songloaded: false,
        amountCount: 0,
        showContent: false,
        playerVars: {
            start: 13,
            autoplay: 1,
            height: 9999,
            width: 9999,
        },
    }
  },
  mounted() {
    this.$refs.youtube.player.setVolume(40)
  },
  methods: {
    loaded: function() {
        if(!this.$data.songloaded){
            this.$data.songloaded = true;
            setTimeout(() => {
                this.setString()
            }, 800);
        }
    },
    buffering: function() {
        this.$data.namida = "哭"
    },
    setString() {
        if (this.$data.amountCount < 8) {
            this.$data.amountCount++
            this.$data.namida = "N"
            setTimeout(() => {
                this.$data.namida += "A"
            }, 500);
            setTimeout(() => {
                this.$data.namida += "M"
            }, 1100);
            setTimeout(() => {
                this.$data.namida += "I"
            }, 1400);
            setTimeout(() => {
                this.$data.namida += "D"
            }, 1600);
            setTimeout(() => {
                this.$data.namida += "A"
            }, 2000);
            setTimeout(() => {
                this.setString()
            }, 2350);
        }
        else {
            this.$data.namida += "\n(TEARS)"
            setTimeout(() => {
                this.$data.showContent = true;
            }, 500);
        }
    }
  },
  watch: {
    },
}
</script>
<style lang="less" scoped>
a {
  color: #e22c78;
}
pre {
    font-size: 200px;
}
#warning {
    position: fixed;
    bottom:0px;
    width: 100%;
}
.container {
    position: absolute;
    z-index: -100;
    width: 100%
}
</style>
