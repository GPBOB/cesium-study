<template>
  <div class="vt_menu">
    <a-row>
      <a-col :span="3" v-for="(item,index) in menu" :key="index">
        <span class="menuTitle" @click="menuToRouter(item.path)">{{item.name}}</span>
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
          name: "菜单一",
          path: "/manage"
        },
        {
          icon: "",
          name: "菜单二",
          path: "/person"
        }
      ]
    };
  },
  components: {},
  methods: {
    menuToRouter(route) {
      this.$router.push({ path: route });
      if (this.$parent.$children[2].$refs.side !== undefined) {
        this.$parent.$children[2].$refs.side.openSide();
      }
    }
  },
  mounted() {}
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
