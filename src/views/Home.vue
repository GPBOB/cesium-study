<template>
  <div class="home">
    <div class="mapImage">
      <button class="map_btns" @click="changeMap(1)">谷歌图层</button>
      <button class="map_btns" @click="changeMap(2)">argis图层</button>
      <button class="map_btns" @click="flyMap()">飞行图层</button>
      <button class="map_btns" @click="drawPoint">画点</button>
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
      mapImage: 1,
      mapViewer: null,
      mapHandle: null
    };
  },
  components: {
    Map
  },
  methods: {
    changeMap(type) {
      this.$refs.mapViewer.changeUrl(type);
    },
    flyMap(latlng) {
      let point = this.mapViewer.entities.add({
        name: "point_one",
        position: latlng,
        point: {
          pixelSize: 10,
          color: Cesium.Color.BLACK,
          heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
        }
      });
      this.mapViewer.flyTo(point);
    },
    //点击屏幕获取经纬度
    getHandleLatlng() {
      this.mapHandle = new Cesium.ScreenSpaceEventHandler(
        this.mapViewer.scene.canvas
      );
      this.mapHandle.setInputAction(event => {
        let ellipsoid = this.mapViewer.scene.globe.ellipsoid;
        // 有地形时使用
        let earthPosition = this.mapViewer.scene.pickPosition(event.position);
        // 无地形时使用
        let scenePosition = this.mapViewer.scene.camera.pickEllipsoid(
          event.position,
          ellipsoid
        );
        // 判断是否点击地球
        if (scenePosition !== undefined) {
          //cartesian3转化为经纬度
          var cartographic = ellipsoid.cartesianToCartographic(earthPosition);
          var lat = Cesium.Math.toDegrees(cartographic.latitude);
          var lng = Cesium.Math.toDegrees(cartographic.longitude);
          var alt = cartographic.height;
          console.log(lat, lng, alt);
        }

        // this.flyMap(scenePosition);
      }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    },
    //标绘
    drawPoint(){
      this.$drawHelper.drawPoint()
    }
  },
  mounted() {
    this.mapViewer = this.$refs.mapViewer.viewers;
    // this.getHandleLatlng();
    // this.$drawHelper.initDrawHelper()
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
    height: auto;
    top: 20px;
    left: 20px;
    z-index: 100;
    .map_btns {
      margin-right: 10px;
    }
  }
}
</style>
