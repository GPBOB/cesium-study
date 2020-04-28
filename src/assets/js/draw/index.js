let earth = {
  tracker: null,
  //图层名称
  layerId: "globeDrawerDemoLayer",
  //全局变量，用来记录shape坐标信息
  shapeDic: {},
  //编辑或删除标识,1为编辑，2为删除
  flag: 0,
  viewer: null,
  googleMapURL:
    "http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali",
  initVewer: function(cesium_token) {
    let googleMap = new Cesium.UrlTemplateImageryProvider({
      url: "http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali"
    });
    Cesium.Ion.defaultAccessToken = cesium_token;
    console.log(this.viewer)
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
      imageryProvider: googleMap,
      terrainProvider: Cesium.createWorldTerrain(),
    })
    //去除cesium图标
    this.viewer._cesiumWidget._creditContainer.style.display = "none"
    return this.viewer
  },
  /**初始化DrawHelper
   * @param
   * viewer:Cesium viewer
   * return tracker
   */
  initDrawHelper: function() {
    this.tracker = new GlobeTracker(this.viewer)
    return this.tracker
  },
  /*
  绘制point
  */
  drawPoint: function() {
    this.flag = 0
    this.tracker.trackPoint((position) => {
      var objId = new Date().getTime()
      this.shapeDic[objId] = position
      this.showPoint(objId, position)
    })
  },
  showPoint: function(objId, position) {
    var entity = this.viewer.entities.add({
      layerId: this.layerId,
      objId: objId,
      shapeType: "Point",
      position: position,
      billboard: {
        image: "images/circle_red.png",
        eyeOffset: new Cesium.ConstantProperty(
          new Cesium.Cartesian3(0, 0, -500)
        ),
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
      },
    })
  },
  /*
  绘制polygon
  */
  drawPolygon: () => {
    flag = 0
    tracker.trackPolygon((positions) => {
      var objId = new Date().getTime()
      shapeDic[objId] = positions
      showPolygon(objId, positions)
    })
  },
  //polygon显示
  showPolygon: (objId, positions) => {
    var material = Cesium.Color.fromCssColorString("#ff0").withAlpha(0.5)
    var outlineMaterial = new Cesium.PolylineDashMaterialProperty({
      dashLength: 16,
      color: Cesium.Color.fromCssColorString("#00f").withAlpha(0.7),
    })
    var outlinePositions = [].concat(positions)
    outlinePositions.push(positions[0])
    var bData = {
      layerId: layerId,
      objId: objId,
      shapeType: "Polygon",
      polyline: {
        positions: outlinePositions,
        clampToGround: true,
        width: 2,
        material: outlineMaterial,
      },
      polygon: new Cesium.PolygonGraphics({
        hierarchy: positions,
        asynchronous: false,
        material: material,
      }),
    }
    // var entity = viewer.entities.add(bData);
  },
}
export default earth
