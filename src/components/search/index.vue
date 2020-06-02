<template>
  <div>
    <div class="search">
      <el-row type="flex" justify="center">
        <el-col :span="2" style="margin-right:30px">
          <img style="width:100%;height:40px;" src="@/assets/img/in2.jpg" alt />
        </el-col>
        <el-col :span="6">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">进入贴吧</el-button>
          <el-button type="primary" plain>全吧搜索</el-button>
          <a href style="margin-left:15px">高级搜索</a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style lang="less" scoped>
.search {
  margin-top: 20px;
  .el-col {
    .el-input {
    }
  }
}
</style>
