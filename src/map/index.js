import config from '@/config';
export default {
  viewer: null,
  googleMapURL:
    "http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali",
  arcGisURL:
    "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
  initMap: function() {
    let googleMap = new Cesium.UrlTemplateImageryProvider({
      url: this.googleMapURL
    });
    Cesium.Ion.defaultAccessToken = config.cesium_token;
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
    //去除cesium图标
    this.viewer._cesiumWidget._creditContainer.style.display = "none";
    //设置camera视角
    this.viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(
        config.mapCenter[0],
        config.mapCenter[1],
        config.mapCenter[2]
      ),
      orientation: {
        heading: Cesium.Math.toRadians(0),
        pitch: Cesium.Math.toRadians(-90),
        roll: Cesium.Math.toRadians(0)
      }
    });
  },
  /**
   * 切换地图影响图层事件
   * @method changeMapImage
   * @param type 类型：1--谷歌影像图层，2--arcgis影像图层
   */
  changeMapImage: function(type) {
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
};
