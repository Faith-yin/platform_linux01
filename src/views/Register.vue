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
                <h3 class="login-title">Linux系统管理学习平台</h3>
                <div class="login-info color--gray">请注册</div>
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
            <!-- 再次密码 -->
            <el-form-item prop="password">
                <el-input   type="password" 
                            maxlength="12"
                            show-password
                            prefix-icon="el-icon-lock"
                            placeholder="请再次输入密码" 
                            v-model="form.repassword"/>
            </el-form-item>

            
            <!-- 按钮 -->
            <el-form-item class="btn-box">
                <el-button  size="medium"
                            @click="routeGo({name:'Login'})">去 登 录</el-button>
                <el-button  size="medium"
                            type="primary"
                            @click="register">注 册</el-button>
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
                username: null,
                password: null,
                repassword: null,
            },
            // 表单验证，需要在 el-form-item 元素中增加 prop 属性
            rules: {
                username: [
                    {required: true, message: '账号不可为空', trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '密码不可为空', trigger: 'blur'}
                ],
                repassword: [
                    {required: true, message: '密码不可为空', trigger: 'blur'}
                ],
            },
            // 对话框显示和隐藏
            dialogVisible: false,
        }
    },
    methods: {
        /**
         * @author: 殷鹏飞
         * @Date: 2019-12-27 10:23:23
         * @information: 注册点击
         */
        register() {
            // 为表单绑定验证功能
            this.$refs.registerForm.validate((valid) => {
                if (valid) {
                    console.log('表单：',this.form);
                    this.$message.success('注册成功，请登录！');
                    this.routeGo({name: 'Login'})
                }
            });
        }
    }
}
</script>

<style lang="scss">
@import '@/style/business/register.scss'
</style>