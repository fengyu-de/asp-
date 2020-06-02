<template>
  <div>
    <!-- 头部导航 -->
    <toNav></toNav>
    <!-- 搜索模块 -->
    <search></search>
    <!-- 轮播图模块 -->
    <swiper></swiper>
    <LeftNav></LeftNav>
  </div>
</template>

<script>
import toNav from "@/components/tonav/index"; //头部导航
import search from "@/components/search/index"; //搜索模块
import swiper from "@/components/swiper/index"; //轮播图模块
import LeftNav from "@/components/leftNav/index"; //左侧导航
export default {
  data() {
    return {};
  },
  components: {
    toNav,
    search,
    swiper,
    LeftNav
  }
};
</script>

<style>
</style>
