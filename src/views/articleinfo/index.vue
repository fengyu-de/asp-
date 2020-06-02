<template>
  <div>
    <ToNav></ToNav>
    <el-page-header @back="goBack" content="详情页面"></el-page-header>
    <div class="border_top"></div>
    <el-row type="flex" justify="center">
      <el-col :span="15" style="padding:50px;border: 1px solid #ccc;">
        <div class="title" style="margin-top:30px">
          <h1>长沙15条公交线路优化调整 新增线路1条</h1>
          <div class="username">
            <span style="margin-right:50px">发帖人：哈哈哈哈</span>
            <span>发布时间：{{time | newTime}}</span>
          </div>
        </div>
        <div class="info">
          <p>
            新增“粟塘小区-团然镇”公交线路
            从粟塘小区发车，经X047县道至团然村，往返运行。
            调整101路
            从南湖公交首末站发车，经书院路接原线，往返运行。
            调整130路
            从汽车东站发车，按原线至劳动广场后，改为(左转)书院路至南湖公交首末站。
            调整160路
            从长沙南站发车，按原线至书院路后，(直行)至南湖公交首末站。
            调整367路
            从东方红小学发车，经东方红路、(左转)看云路、(右转)赏月路、(左转)踏雪路接原线至四方坪。
            调整夜1路
            湘粮国际发车，经安顺路、(左转)湘江北路，(左转)青竹湖路，(右转)芙蓉北路接原线运行。
            调整21路
            从粟塘小区发车，按原线行驶至汇金路万芙路口后，改(直行)汇金路、(左转)高升路、(左转)豹塘路、(右转)刘家冲路、(左转)时代阳光大道、(右转)新姚中路、(右转)乌塘路至槐树塘社区。
            调整503路
            东升路发车按原线行驶至长沙大道沙湾路口后，改(右转)沙湾路、(左转)劳动路、(右转)红旗路至长沙火车南站。
            调整旅1路
            火车站发车，接原线至阜埠河后，改(右转)后湖路、(左转)清水路、(右转)麻园路，接原线至南二环北辅道调头经南二环南辅道至猴子石大桥西。
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="end" style="margin-top:30px">
      <el-col :span="5">
        <i @click="dainzan" :class="['iconfont', 'icon-dianzan',{'color':flag}]"></i>
        {{num}}
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <div class="toptitle">
          <p class="title">2000&nbsp;评论</p>
        </div>
      </el-col>
    </el-row>
    <!-- 评论组件 -->
    <el-row type="flex" justify="center">
      <el-col :span="18">
        <comment></comment>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ToNav from "@/components/tonav/index"; //头部导航
import comment from "@/components/comment/index"; //评论导航组件
export default {
  data() {
    return {
      time: new Date(),
      flag: false, //控制点赞图标颜色
      num: 30
    };
  },
  created() {},
  components: {
    ToNav,
    comment
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    // 点赞事件
    dainzan() {
      this.flag = !this.flag;
      if (this.flag) {
        this.num++;
      } else {
        this.num--;
      }
    }
  }
};
</script>

<style lang="less">
.border_top {
  width: 100%;
  height: 50px;
  background-color: transparent;
  border-bottom: 3px solid #f9514f;
}
.title {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  span {
    line-height: 7;
  }
}
.info {
  p {
    line-height: 1.5;
    font-size: 20px;
  }
}
.icon-dianzan {
  cursor: pointer;
  font-size: 30px;
}
.color {
  color: orangered;
}
// 评论
.toptitle {
  display: flex;
  justify-content: flex-start;
  .title {
    font-size: 22px;
    color: #222;
  }
}
</style>
