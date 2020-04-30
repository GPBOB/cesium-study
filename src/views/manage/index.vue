<template>
  <div>
    <sideComp ref="side">
      <span>manage</span>
    </sideComp>
  </div>
</template>

<script>
import sideComp from "@/components/sideComp";
export default {
  data() {
    return {};
  },

  components: {
    sideComp
  },
  methods: {},
  mounted() {
    this.$refs.side.openSide();
  },
  beforeDestroy() {
    this.$refs.side.closeSide();
  }
};
</script>
<style lang='less' scoped>
</style>