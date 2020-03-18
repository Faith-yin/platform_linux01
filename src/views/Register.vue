<!--
 * @author: 殷鹏飞
 * @Date: 2019-12-27 15:04:30
 * @information: 注册页面
-->
<template>
    <div id="register">
        <!-- 表单 -->
        <el-form    ref="registerForm" 
                    :model="form" 
                    :rules="rules" 
                    class="login-box">
            <!-- 标题 -->
            <div class="login-title-box">
                <h3 class="login-title">Linux系统学习平台</h3>
                <div class="login-info color--gray">请注册</div>
            </div>
            <!-- 账号 -->
            <el-form-item prop="username">
                <el-input   type="text" 
                            maxlength="12"
                            minlength="2"
                            prefix-icon="el-icon-user"
                            placeholder="输入名称(2 到 12 个字符)" 
                            v-model="form.username"
                            @keyup.enter.native="onRegister"/>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password">
                <el-input   type="password" 
                            maxlength="12"
                            minlength="6"
                            show-password
                            prefix-icon="el-icon-lock"
                            placeholder="输入密码(6 到 12 个字符)"
                            v-model="form.password"
                            @keyup.enter.native="onRegister"/>
            </el-form-item>
            <!-- 再次密码 -->
            <el-form-item prop="repassword">
                <el-input   type="password" 
                            maxlength="12"
                            show-password
                            prefix-icon="el-icon-lock"
                            placeholder="再次输入密码" 
                            v-model="form.repassword"
                            @keyup.enter.native="onRegister"/>
            </el-form-item>
            <!-- 按钮 -->
            <el-form-item class="btn-box">
                <el-button  size="medium"
                            @click="routeGo({name:'Login'})">去 登 录</el-button>
                <el-button  size="medium"
                            type="primary"
                            @click="onRegister">注 册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import publicInfo from '@/relyClass/public_info.js'
import publicClass from '@/mixins/public_class.js'
import { Message } from 'element-ui'

export default {
  mixins: [publicInfo, publicClass],
  data() {
    // 再次输入密码校验方式
    let validatePass = (rule, value, callback) => {
      if(value !== this.form.password) callback(new Error('两次输入密码不一致'))
      callback()
    }
    return {
      // 表单内容
      form: {
        username: null,
        password: null,
        repassword: null,
      },
      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          {required: true, message: '名称不可为空', trigger: 'blur'},
          { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          {required: true, message: '密码不可为空', trigger: 'blur'},
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        repassword: [
          {required: true, message: '请再次输入密码', trigger: 'blur'},
          {validator: validatePass, trigger: 'blur'}
        ],
      },
    }
  },
  methods: {
    /**
     * @author: 殷鹏飞
     * @Date: 2019-12-27 10:23:23
     * @information: 注册点击
     */
    onRegister() {
      let {username, password, repassword} = this.form
      // 表单校验
      this.$refs.registerForm.validate().then(() => {
        // 请求模板参数
        let methodModel = {
          pMethod: this.addUser({username, password}),
          message: '注册成功，请登录',
          callBack: 'onRegisterCallBack',
        }
        this.methodQuery(methodModel)
      })
      
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-09 09:27:20
     * @Description: 注册点击回调
     */
    onRegisterCallBack(res) {
      // 路由跳转
      this.routeGo({name:'Login'})
    },
  }
}
</script>

<style lang="scss">
@import '@/style/business/register.scss'
</style>