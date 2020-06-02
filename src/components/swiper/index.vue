<template>
  <div>
    <el-row type="flex" justify="center" :gutter="20">
      <el-col :span="12">
        <el-carousel :interval="3000" type="card" height="300px" style="width:100%">
          <el-carousel-item v-for="(item,index) in list" :key="index">
            <img :src="item" alt style="width:100%" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        require("@/assets/img/in2.jpg"),
        require("@/assets/img/in1.jpg"),
        require("@/assets/img/in2.jpg"),
        require("@/assets/img/in1.jpg")
      ]
    };
  }
};
</script>

<style>
.el-row {
  margin-top: 30px;
}
.userinfo {
  display: flex;
  justify-content: center;
  margin-left: 20px;
}
</style>
