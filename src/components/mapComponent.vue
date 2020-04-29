<template>
  <div id="map"></div>
</template>

<script>
import map from "@/map";
export default {
  name: "HelloWorld",
  data() {
    return {
      map,
      viewers: null
    };
  },
  props: {
    mapImage: {
      type: Number,
      default: () => {
        return 1;
      }
    }
  },
  methods: {
    changeUrl(type) {
      this.map.viewer.imageryLayers.removeAll();
      if (type == 1)
        this.viewer.imageryLayers.addImageryProvider(
          new Cesium.UrlTemplateImageryProvider({
            url: this.map.googleMapURL
          })
        );
      else {
        this.map.viewer.imageryLayers.addImageryProvider(
          new Cesium.ArcGisMapServerImageryProvider({
            url: this.map.arcGisURL
          })
        );
      }
    }
  },
  mounted() {
    this.map.initMap();
  },
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#map {
  width: 100%;
  height: 100%;
}
</style>
