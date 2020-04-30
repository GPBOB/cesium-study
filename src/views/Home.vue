<template>
  <div class="home">
    <component
      v-for="(item, index) in loadComp"
      :key="index"
      :is="comps[item]"
    ></component>
    <Menu></Menu>
    <router-view></router-view>
  </div>
</template>

<script>
import comps from "@/components"; //引入组件
import Menu from "@/components/menu";
import map from "@/map";

export default {
  name: "Home",
  data() {
    return {
      mapImage: 1,
      loadComp: ["mapComp"], //需要引入的组件
      comps
    };
  },
  components: {
    Menu
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scope>
.home {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
