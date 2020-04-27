<template>
  <div id="map"></div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      viewer: null,
      googleMapURL:
        "http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali",
      arcGisURL:
        "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
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
      this.viewer.imageryLayers.removeAll();
      if (type == 1)
        this.viewer.imageryLayers.addImageryProvider(
          new Cesium.UrlTemplateImageryProvider({
            url: this.googleMapURL
          })
        );
      else {
        this.viewer.imageryLayers.addImageryProvider(
          new Cesium.ArcGisMapServerImageryProvider({
            url: this.arcGisURL
          })
        );
      }
    }
  },
  mounted() {
    let googleMap = new Cesium.UrlTemplateImageryProvider({
      url: this.googleMapURL
    });
    this.viewer = new Cesium.Viewer("map", {
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      baseLayerPicker: true,
      navigationHelpButton: false,
      animation: false,
      timeline: false,
      fullscreenButton: false,
      vrButton: false,
      imageryProvider: googleMap
    });
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
