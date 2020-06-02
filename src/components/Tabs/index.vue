<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="文章" name="first">
        <Article></Article>
      </el-tab-pane>
      <el-tab-pane label="图片" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="其他" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Article from "@/components/article/index"; //论坛种类
export default {
  data() {
    return {
      activeName: "first",
      index: 0
    };
  },
  methods: {
    handleClick(tab, event) {
      this.index = tab.index;
      console.log(tab, event);
    }
  },
  components: {
    Article
  }
};
</script>

<style>
</style>
