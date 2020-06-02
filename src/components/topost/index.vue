<template>
  <!-- 发帖组件 -->
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button size="small" type="primary">上传帖子封面</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <!-- 帖子输入框 -->
        <el-input type="textarea" autosize placeholder="请输入帖子标题" v-model="textareatitle"></el-input>
        <!-- 帖子分类 -->
        <el-select v-model="select" placeholder="请选择帖子分类" style="width:100%;margin-top:20px">
          <el-option v-for="(item,index) in selectList" :label="item" :key="index" :value="index"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <br />
    <br />
    <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea"></el-input>
    <el-row type="flex" justify="end">
      <el-col :span="5">
        <div class="btn">
          <el-button @click="fun">发表</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          //要上传的图片路径
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      textarea: "", //帖子内容
      textareatitle: "", //帖子标题
      selectList: ["风景", "城市", "美女", "动物", "动漫", "游戏", "其他"],
      select: "" //选中的帖子分类
    };
  },
  methods: {
    handlePreview(res) {
      console.log(res);
    },
    handleRemove(res) {
      console.log(res);
    },
    // 点击发表事件
    fun() {
      console.log(this.textarea, this.url, this.select, this.textareatitle);
    }
  }
};
</script>

<style lang="less" scoped>
.btn {
  display: flex;
  margin-top: 15px;
  justify-content: center;
}
</style>
