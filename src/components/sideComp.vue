<template>
  <transition name="notice">
    <div class="sideComponent" v-show="show">
      <button @click="closeSide">退出侧边栏</button>
      右侧菜单
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "sideComp",
  data() {
    return {
      show: false
    };
  },
  props: {},

  components: {},

  mounted() {},

  methods: {
    closeSide() {
      this.show = false;
    },
    openSide() {
      this.show = true;
    }
  }
};
</script>
<style lang="less" scoped>
.sideComponent {
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 100;
  width: 300px;
  height: 100%;
  background-color: rgb(18, 23, 37);
}
</style>