<template>
  <div class="home">
    <MapComponent ref="mapViewer" :mapImage="mapImage" />
    <sideComponent></sideComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import MapComponent from "@/components/mapComponent.vue";
import sideComponent from "@/components/sideComponent";
import map from "@/map";

export default {
  name: "Home",
  data() {
    return {
      mapImage: 1
    };
  },
  components: {
    MapComponent,
    sideComponent
  },
  methods: {},
  mounted() {
  }
};
</script>
<style lang="less" scope>
.home {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
