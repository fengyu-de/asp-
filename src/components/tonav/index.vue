<template>
  <div>
    <div class="nav">
      <div class="box1">
        <div :class="['item']" v-for="(item,index) in list" :key="index">
          <a :class="{'border':i==index}" @click.stop.prevent="i=index" href>{{item}}</a>
        </div>
        <div class="item">|</div>
      </div>
      <div class="box2">
        <a v-if="flag" href class="item" @click.stop.prevent="login">登录</a>
        <a v-if="flag" href class="item" @click.stop.prevent="enroll">注册</a>
        <a v-if="!flag" href class="item" @click.stop.prevent="mine">我的</a>
        <a v-if="!flag" href class="item" @click.stop.prevent="goout">退出</a>
        <div :class="['item']" @click="i=index" v-for="(item,index) in list2" :key="index">
          <a
            :class="{'border':i==index}"
            @click.stop.prevent="i=index"
            href
            v-show="index==3?false:true"
          >{{item}}</a>
        </div>
        <div class="item huiyuan">
          <a href @click.stop.prevent="fn">
            <i class="iconfont icon-wangguan"></i>
            会员
            <div class="item_box" v-show="flag2">
              <div class="item_item">
                <i class="iconfont icon-wangguan"></i>
                T豆钱包
              </div>
              <div class="item_item">
                <i class="iconfont icon-wangguan"></i>
                T豆商场
              </div>
              <div class="item_item">
                <i class="iconfont icon-wangguan"></i>
                会员官网
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- 登录 -->
    <el-dialog title="请你登录" :visible.sync="dialogVisible" width="30%">
      <span slot="footer" class="dialog-footer">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
          <el-form-item label="账号" prop="username">
            <el-input prefix-icon="el-icon-user-solid" v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input prefix-icon="el-icon-s-cooperation" v-model="ruleForm.password"></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="determine">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 注册 -->
    <el-dialog title="注册" :visible.sync="enrollVisible" width="30%">
      <span slot="footer" class="dialog-footer">
        <el-form :model="enrollForm" :rules="enrollrules" ref="enrollForm" label-width="110px">
          <el-form-item label="账号" prop="username">
            <el-input prefix-icon="el-icon-user-solid" v-model="enrollForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input prefix-icon="el-icon-s-cooperation" v-model="enrollForm.password"></el-input>
          </el-form-item>
          <el-form-item label="再次输入密码" prop="password2">
            <el-input prefix-icon="el-icon-s-cooperation" v-model="enrollForm.password2"></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="enrollcancel">取 消</el-button>
        <el-button type="primary" @click="enrolldetermine">注册</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value != this.enrollForm.password2) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      i: 0,
      list: [
        "网页",
        "新闻",
        "贴吧",
        "知道",
        "视频",
        "音乐",
        "图片",
        "地图",
        "文库"
      ],
      list2: ["百度贴吧", "问题反馈"],
      flag2: false, //会员二级导航显示隐藏
      dialogVisible: false, //登录窗口的显示隐藏
      enrollVisible: false, //注册窗口的显示隐藏
      ruleForm: {
        //登录表单数据
        username: "",
        password: ""
      },
      rules: {
        //登录验证规则
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 13, message: "长度在 6 到 13 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 13, message: "长度在 6 到 13 个字符", trigger: "blur" }
        ]
      },
      // 注册验证规则
      enrollrules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 13, message: "长度在 6 到 13 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 13, message: "长度在 6 到 13 个字符", trigger: "blur" }
        ],
        password2: [{ validator: validatePass2, trigger: "blur" }]
      },
      enrollForm: {
        //注册提交的数据
        username: "",
        password: "",
        password2: ""
      },
      flag: true //判断用户是否登录判断是否显示隐藏
    };
  },
  methods: {
    fn() {
      this.flag = !this.flag;
      if (this.flag) {
        setTimeout(() => {
          this.flag = false;
        }, 3000);
      }
    },
    // 显示登录框事件
    login() {
      this.dialogVisible = true;
    },
    // 登录取消事件
    cancel() {
      this.$refs.ruleForm.resetFields(); //表单清空
      this.dialogVisible = false;
    },
    // 登录确定事件（登录请求）
    determine() {
      this.$refs.ruleForm.validate(res => {
        // console.log(res);
        if (res == true) {
          console.log(this.ruleForm);
          this.dialogVisible = false;
          let res = JSON.stringify(this.ruleForm);
          console.log(res);
          localStorage.setItem("user", res); //将登录信息存储中本地存储中
          const loading = this.$loading({
            //加载效果
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          });
          setTimeout(() => {
            this.$message({
              type: "success",
              message: "恭喜你登录成功"
            });
            this.check();
            loading.close(); //关闭加载效果
            this.$emit("fn"); //触发父组件的方法
          }, 2000);
        }
      });
    },
    // 点注册显示按钮
    enroll() {
      this.enrollVisible = true;
      toString;
    },
    // 取消注册事件
    enrollcancel() {
      this.enrollVisible = false;
      this.$refs.enrollForm.resetFields(); //清空
    },
    // 确定注册事件
    enrolldetermine() {
      this.$refs["enrollForm"].validate(res => {
        console.log(res);
        if (res) {
          this.$message({
            type: "success",
            message: "注册成功"
          });

          this.enrollVisible = false;
          this.$refs.enrollForm.resetFields();
        }
      });
    },
    // 跳转到我的页面事件
    mine() {
      this.$router.push("/mine");
    },
    // 查看本地存储中是否有用户数据
    check() {
      let res = localStorage.getItem("user") || [];
      if (res.length == 0) {
        this.flag = true;
        return;
      }
      this.flag = false;
    },
    // 退出事件
    goout() {
      const loading = this.$loading({
        lock: true,
        text: "退出中。。。",
        spinner: "el-icon-loading",
        background: "#fff"
      });
      localStorage.clear(); //清除localStorage中的数据
      setTimeout(() => {
        this.check();
        this.$message("你退出了拍拍论坛");
        loading.close(); //关闭加载动画
      }, 2000);

      this.$emit("fn");
      //加载动画隐藏
    }
  },
  mounted() {
    this.check(); //查看本地存储中是否有用户数据
  }
};
</script>

<style lang="less" scoped>
.nav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .box1 {
    width: 432px;
    display: flex;
    justify-content: space-around;
    .item {
      a {
        font-size: 13px;
        color: #333;
        font-weight: 700;
      }
    }
  }
  .box2 {
    width: 350px;
    display: flex;
    justify-content: space-around;
    .item {
      a {
        color: #333;
      }
    }
  }
}
// 去除a标签下划线
.border {
  text-decoration: none;
}
.huiyuan {
  position: relative;

  .icon-wangguan {
    color: orange;
  }
  .item_box {
    width: 85px;
    background-color: #ccc;
    position: absolute;
    top: 20px;
    left: -30px;
    .item_item {
      padding-top: 10px;
      &:hover {
        background-color: #fff;
      }
    }
  }
}
</style>


















