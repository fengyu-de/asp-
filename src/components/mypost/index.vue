<template>
  <div>
    <h1>{{title}}</h1>
    <div class="box">
      <div class="item" @click="goinfo">
        <img src="@/assets/img/in1.jpg" alt />
        <div class="text">我刚刚通过哔哩哔哩会员试炼，拿到了63分的成绩，晋升为正式会</div>
        <div class="icon">
          <i class="iconfont icon-dianzan">100w</i>
          <i class="iconfont icon-chakan">1000w</i>
        </div>
      </div>
      <div class="item">
        <img src="@/assets/img/in2.jpg" alt />
        <div class="text">我刚刚通过哔哩哔哩会员试炼，拿到了63分的成绩，晋升为正式会</div>
        <div class="icon">
          <i class="iconfont icon-dianzan">100w</i>
          <i class="iconfont icon-chakan">1000w</i>
        </div>
      </div>
      <div class="item">
        <img src="@/assets/img/in1.jpg" alt />
        <div class="text">我刚刚通过哔哩哔哩会员试炼，拿到了63分的成绩，晋升为正式会</div>
        <div class="icon">
          <i class="iconfont icon-dianzan">100w</i>
          <i class="iconfont icon-chakan">1000w</i>
        </div>
      </div>
      <div class="item">
        <img src="@/assets/img/in1.jpg" alt />
        <div class="text">我刚刚通过哔哩哔哩会员试炼，拿到了63分的成绩，晋升为正式会</div>
        <div class="icon">
          <i class="iconfont icon-dianzan">100w</i>
          <i class="iconfont icon-chakan">1000w</i>
        </div>
      </div>
      <div class="item">
        <img src="@/assets/img/in1.jpg" alt />
        <div class="text">我刚刚通过哔哩哔哩会员试炼，拿到了63分的成绩，晋升为正式会</div>
        <div class="icon">
          <i class="iconfont icon-dianzan">100w</i>
          <i class="iconfont icon-chakan">1000w</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    title: String
  },
  methods: {
    // 跳转到帖子详情页
    goinfo() {
      this.$router.push({ name: "ArticleInfo", params: { id: 100 } });
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  width: 80%;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  .item {
    margin: 0 20px;
    cursor: pointer;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    img {
      width: 100%;
    }
    // 两行超出省略号显示
    .text {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    .icon {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
