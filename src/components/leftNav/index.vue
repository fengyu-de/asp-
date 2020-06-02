<template>
  <div>
    <!-- 左侧导航 -->
    <el-row type="flex" :gutter="20">
      <el-col :span="3" style="margin-left:10%;">
        <el-menu
          default-active="/home/hot"
          background-color="Grey"
          text-color="Beige"
          :collapse="isCollapse"
          active-text-color="#fff"
          router
        >
          <el-menu-item index="/home/hot">
            <i class="el-icon-setting"></i>
            <span slot="title">热门</span>
          </el-menu-item>
          <el-menu-item index="/home/scenery">
            <i class="el-icon-setting"></i>
            <span slot="title">风景</span>
          </el-menu-item>
          <el-menu-item index="/home/city">
            <i class="el-icon-setting"></i>
            <span slot="title">城市</span>
          </el-menu-item>
          <el-menu-item index="/home/girl">
            <i class="el-icon-setting"></i>
            <span slot="title">美女</span>
          </el-menu-item>
          <el-menu-item index="/home/animal">
            <i class="el-icon-setting"></i>
            <span slot="title">动物</span>
          </el-menu-item>
          <el-menu-item index="/home/cartoon">
            <i class="el-icon-setting"></i>
            <span slot="title">动漫</span>
          </el-menu-item>
          <el-menu-item index="/home/game">
            <i class="el-icon-setting"></i>
            <span slot="title">游戏</span>
          </el-menu-item>
          <el-menu-item index="/home/rests">
            <i class="el-icon-setting"></i>
            <span slot="title">其他</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="15">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false //控制是否展开
    };
  }
};
</script>

<style>
</style>
