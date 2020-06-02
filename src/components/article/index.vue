<template>
  <div>
    <el-collapse v-model="activeNames" style="background-color:#ccc">
      <el-collapse-item title="一致性 Consistency" name="1">
        <div>
          <el-button @click="fun">进入详情</el-button>
        </div>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback" name="2">
        <div>
          <el-button>进入详情</el-button>
        </div>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency" name="3">
        <div>
          <el-button>进入详情</el-button>
        </div>
      </el-collapse-item>
      <el-collapse-item title="可控 Controllability" name="4">
        <div>
          <el-button>进入详情</el-button>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  props: {
    url: String
  },
  data() {
    return {
      list: [],
      activeNames: "2",
      id: 123
    };
  },
  methods: {
    getlist() {},
    fun() {
      // 页面跳转传递参数(params传参只能是name不能为path)
      this.$router.push({ name: "ArticleInfo", params: { id: this.id } });
    }
  }
};
</script>

<style>
</style>
