<template>
  <div class="home">
    <div class="mapImage">
      <button @click="changeMap(1)">谷歌图层</button>
      <button @click="changeMap(2)">argis图层</button>
    </div>
    <Map ref="mapViewer" :mapImage="mapImage" />
    <router-view></router-view>
  </div>
</template>

<script>
import Map from "@/components/map.vue";

export default {
  name: "Home",
  data() {
    return {
      mapImage: 1
    };
  },
  components: {
    Map
  },
  methods: {
    changeMap(type) {
      console.log(this.$refs.mapViewer);
      this.$refs.mapViewer.changeUrl(type);
    }
  }
};
</script>
<style lang="less" scope>
.home {
  width: 100%;
  height: 100%;
  position: relative;
  .mapImage {
    position: absolute;
    width: 100px;
    height: 50px;
    top: 20px;
    left: 100px;
    background-color: #fff;
    z-index: 100;
  }
}
</style>
