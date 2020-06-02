<template>
  <div :class="{'color':flag}">
    <ToNav @fn="getdata"></ToNav>
    <div v-if="flag">
      <el-row type="flex" justify="center" style="padding-top:20px;">
        <el-col :span="20" class="imgbox">
          <img style="width:100%" src="@/assets/img/1.webp" alt />
          <div class="user" style="width:100%">
            <div class="userimg">
              <div></div>
              <span>更换头像</span>
              <img src="@/assets/img/user.jpg" alt />
            </div>
            <div class="username">
              <p>哈哈哈哈</p>
              <p class="gexing">编辑个性签名</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- 小工具 -->
      <el-row type="flex" justify="center" style="padding-top:20px;">
        <el-col :span="20" style="background-color:#fff">
          <el-tabs @tab-click="handleClick">
            <el-tab-pane>
              <span slot="label">
                <i class="el-icon-s-home"></i>首页
              </span>
              <MyPost title="我的帖子"></MyPost>
            </el-tab-pane>

            <el-tab-pane>
              <span slot="label">
                <i class="el-icon-star-on"></i>收藏
              </span>
              <MyPost title="我的收藏"></MyPost>
            </el-tab-pane>

            <el-tab-pane>
              <span slot="label">
                <i class="el-icon-document"></i>发帖
              </span>
              <ToPost></ToPost>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </div>
    <!-- 没有登录显示的页面 -->
    <div class="nologin">
      <div class="title">
        <h1>你还没有登录快去登录吧</h1>
      </div>
    </div>
  </div>
</template>

<script>
import ToNav from "@/components/tonav/index"; //顶部导航
import MyPost from "@/components/mypost/index"; //我的帖子
import ToPost from "@/components/topost/index"; //发帖组件
export default {
  data() {
    return {
      flag: false //控制是否登录显示
    };
  },
  components: {
    MyPost,
    ToPost,
    ToNav
  },
  methods: {
    handleClick(tab) {
      console.log(tab.index);
    },
    // 获取本地存储中的登录信息
    getdata() {
      let userdata = localStorage.getItem("user") || [];
      if (userdata.length == 0) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  },
  mounted() {
    this.getdata(); //获取本地存储
  }
};
</script>

<style lang="less" scope>
.imgbox {
  position: relative;
  .user {
    position: absolute;
    bottom: 15%;
    left: 5%;
    display: flex;
    justify-content: flex-start;
    .userimg {
      width: 80px;
      margin-right: 50px;
      position: relative;
      transition: 1s all;
      div {
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        z-index: 2;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.6);
        transition: 1s all;
      }
      &:hover > span {
        display: block;
      }
      &:hover > div {
        opacity: 1;
      }
      span {
        color: #f0f0f0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 1s all;
        display: none;
        z-index: 3;
      }
      img {
        cursor: pointer;
        width: 100%;
        border-radius: 50%;
        position: absolute;
      }
    }
    .username {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        font-size: 18px;
        color: azure;
      }
      .gexing {
        cursor: pointer;
        margin-top: 10px;
        padding: 10px;
        width: 500px;
        font-size: 13px;
        color: #ccc;
        transition: 1s all;
        &:hover {
          background: hsla(0, 0%, 100%, 0.2);
          box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.5);
          border-radius: 10px;
        }
      }
    }
  }
}
// 没有登录页面样式
.nologin {
  margin: 25% auto;
  .title {
    display: flex;
    justify-content: center;
    h1 {
      color: #ccc;
    }
  }
}
</style>
