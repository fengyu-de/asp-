<template>
  <!-- 评论导航组件 -->
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="按热度排序" name="first">
        <commentInfo></commentInfo>
      </el-tab-pane>
      <el-tab-pane label="按时间排序" name="second">
        <commentInfo></commentInfo>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import commentInfo from "@/components/commentinfo/index"; //评论详情组件
export default {
  data() {
    return {
      activeName: "first",
      index: 0,
      list: [] //评论数据
    };
  },
  methods: {
    handleClick(tab) {
      console.log(tab.index);
      this.index = tab.index;
    }
  },
  components: {
    commentInfo
  }
};
</script>

<style>
</style>
