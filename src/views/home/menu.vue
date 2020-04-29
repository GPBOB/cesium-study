<template>
  <div class="vt_menu">
    <!-- <div class="mapImage">
      <button class="map_btns" @click="changeMap(1)">谷歌图层</button>
      <button class="map_btns" @click="changeMap(2)">argis图层</button>
      <button class="map_btns" @click="flyMap()">飞行图层</button>
    </div>-->
    <a-row>
      <a-col :span="3" v-for="(item,index) in menu" :key="index">
        <span class="menuTitle">{{item.name}}</span>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import map from "@/map";


export default {
  name: "Home",
  data() {
    return {
      map,
      mapImage: 1,
      mapViewer: null,
      mapHandle: null,
      menu: [
        {
          icon: "",
          name: "菜单一"
        },
        {
          icon: "",
          name: "菜单二"
        },
        {
          icon: "",
          name: "菜单三"
        }
      ]
    };
  },
  components: {
  },
  methods: {
    changeMap(type) {
      this.map.changeMapImage(type);
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
        }

        this.flyMap(scenePosition);
      }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }
  },
  mounted() {
    this.mapViewer = this.map.viewer;
    // this.getHandleLatlng();
  }
};
</script>
<style lang="less" scope>
.vt_menu {
  position: absolute;
  height: auto;
  width: 100%;
  bottom: 100px;
  z-index: 100;
  .menuTitle {
    color: #ffffff;
    cursor: pointer;
  }
}
</style>
