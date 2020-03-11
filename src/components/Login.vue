<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域-->
      <div class="avatar_box">
        <img src="../assets/logo.png" class="" />
      </div>
      <!-- 登录表单区域-->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!-- 账号-->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="icon iconfont icon-user"></el-input>
        </el-form-item>
        <!-- 密码-->
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" prefix-icon="icon iconfont icon-unlock"></el-input>
        </el-form-item>
        <!-- 按钮-->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="infor" @click="resetloginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        // 登录表单数据绑定
        loginForm: {
          username: '',
          password: ''
        },
        // 表单验证
        loginFormRules: {
          username: [{
              required: true,
              message: '请输入账号',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 10,
              message: '字符长度3-10',
              trigger: 'blur'
            }
          ],
          password: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 15,
              message: '字符长度6-15',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      // 重置 重置为默认值
      resetloginForm() {
        // console.log(this)
        this.$refs.loginFormRef.resetFields()
      },
      login() {
        /* 登录前的预验证 */
        this.$refs.loginFormRef.validate(async valid => {
          // console.log(valid)
          if (!valid) {
            this.$message.error('请输入完整信息')
          } else {
            const {
              data: res
            } = await this.$http.post('user/user', this.loginForm)
            console.log(res)
            if (res.meta.status === 20000) {
              this.$message.success('登录 成功')
              // 保存token
              window.sessionStorage.setItem('token', '857857')
              // 跳转
              this.$router.push('/home')
            } else {
              this.$message.error('登录 失败 ' + res.meta.msg)
            }
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .login_container {
    height: 100%;
    background-color: #42b983;
  }

  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar_box {
      height: 130px;
      width: 130px;
      border: 1px solid #766f7b;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #9c9e9d;
      }
    }
  }

  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }
</style>
