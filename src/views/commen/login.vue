<!--  -->
<template>
  <div>
    <a-form-model :model="form">
      <a-form-model-item label="用户名">
        <a-input v-model="form.name" />
      </a-form-model-item>
      <a-form-model-item label="密码">
        <a-input v-model="form.pswd" />
      </a-form-model-item>
      <a-form-model-item>
        <a-button @click="login">登录</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      form: {
        name: "",
        pswd: ""
      }
    };
  },

  components: {},

  mounted() {},

  methods: {
    ...mapMutations(["setToken", "setUserInfo"]),
    login() {
      this.setToken("sdsfhsdjsbd");
      this.setUserInfo(this.form);
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>
<style lang='less' scoped>
</style>