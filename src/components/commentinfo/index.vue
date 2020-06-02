<template>
  <div>
    <!-- 评论内容组件 -->
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-row type="flex" justify="space-around" :gutter="10">
          <el-col :span="5">
            <div class="userimg">
              <img src="@/assets/img/user.jpg" alt />
            </div>
          </el-col>
          <el-col :span="15">
            <div class="input" style="text-align:center;padding:15px">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="btn" style="text-align:center;padding:15px">
              <el-button @click="fn">发表评论</el-button>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
    fn() {
      console.log("发表评论", this.input);
    }
  }
};
</script>

<style lang="less" scoped>
.userimg {
  width: 100px;
  text-align: center;
  padding: 15px;
  img {
    width: 100%;
    border-radius: 50%;
  }
}
</style>
