<!--
 * @author: 殷鹏飞
 * @Date: 2019-12-27 09:27:28
 * @information: 登录页面
-->
<template>
    <div id="login">
        <!-- 表单 -->
        <el-form    ref="loginForm" 
                    :model="form" 
                    :rules="rules" 
                    class="login-box">
            <!-- 标题 -->
            <div class="login-title-box">
                <h3 class="login-title">Linux系统管理学习平台</h3>
                <div class="login-info color--gray">请登录</div>
            </div>
            <!-- 账号 -->
            <el-form-item prop="username">
                <el-input   type="text" 
                            maxlength="12"
                            prefix-icon="el-icon-user"
                            placeholder="请输入名称" 
                            v-model="form.username"/>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password">
                <el-input   type="password" 
                            maxlength="12"
                            show-password
                            prefix-icon="el-icon-lock"
                            placeholder="请输入密码"
                            v-model="form.password"/>
            </el-form-item>
            <!-- 按钮 -->
            <el-form-item class="btn-box">
                <el-button  size="medium"
                            @click="register">去 注 册</el-button>
                <el-button  type="primary" 
                            size="medium"
                            @click="onSubmit">登 录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import publicInfo from '@/relyClass/public_info.js'
import publicClass from '@/mixins/public_class.js'

export default {
    mixins: [publicInfo, publicClass],
    data() {
        return {
            // 表单内容
            form: {
                username: '',
                password: '',
            },
            // 表单验证，需要在 el-form-item 元素中增加 prop 属性
            rules: {
                username: [
                    {required: true, message: '账号不可为空', trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '密码不可为空', trigger: 'blur'}
                ]
            },
        }
    },
    methods: {
        /**
         * @author: 殷鹏飞
         * @Date: 2019-12-27 10:05:01
         * @information: 登录点击
         */
        onSubmit() {
          let {form} = this
          // 表单校验
          let mark = this.formRequired({arr: form, msg: '请输入用户名和密码'})
          if(!mark) return;
          // 请求模板参数
          let methodModel = {
            pMethod: this.findUserByNameAndPassword(form),
            message: '登录成功',
            callBack: 'onSubmitCallBack',
          }
          this.methodQuery(methodModel)
        },
        /**
         * @Author: 殷鹏飞
         * @Date: 2020-03-08 18:04:28
         * @Description: 登录点击回调事件
         */
        onSubmitCallBack({data}) {
          // 将账户信息存至 sessionStorage 中
          sessionStorage.setItem('userInfo', JSON.stringify(data[0]))
          // 路由跳转
          this.routeGo({name: 'HomePage'})
        },
        /**
         * @author: 殷鹏飞
         * @Date: 2019-12-27 10:23:23
         * @information: 注册点击
         */
        register() {
          this.routeGo({name: 'Register'})
        }
    }
}
</script>

<style lang="scss">
@import '@/style/business/login.scss';
</style>