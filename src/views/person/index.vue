<template>
  <div>
    <sideComp :show="isShow">
      <span>peroson</span>
    </sideComp>
  </div>
</template>

<script>
import sideComp from "@/components/sideComp";
export default {
  data() {
    return {
      isShow: false
    };
  },

  components: {
    sideComp
  },

  mounted() {
    // this.isShow = true;
  },

  methods: {}
};
</script>
<style lang='less' scoped>
</style>