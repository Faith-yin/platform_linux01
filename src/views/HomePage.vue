<!--
 * @author: 殷鹏飞
 * @Date: 2019-12-25 18:46:44
 * @information: 主页面路由
-->
<template>
    <div id="home-page">
        <!-- 顶部信息 -->
        <div class="header">
            <div class="title-info">
                <img src="@/assets/img/linux-logo.jpg" alt="linux_logo">
                <div class="top-title">Linux 管理学习平台</div>
            </div>
            <base-search />
            <el-link type="primary"
                     @click="loginOutClick"
                     :underline="false">退出登录</el-link>
        </div>
        <!-- 顶部导航栏 -->
        <top-nav-menu />
        <!-- 主体区域 -->
        <div class="body">
            <div class="main-container">
                
            </div>
        </div>
    </div>
</template>

<script>
import publicInfo from '@/relyClass/public_info.js'
import publicClass from '@/mixins/public_class.js'

export default {
    mixins: [publicInfo, publicClass],
    data() {
        return {

        }
    },
    methods: {
        /**
         * @author: 殷鹏飞
         * @Date: 2019-12-27 19:08:27
         * @information: 退出登录点击
         */
        loginOutClick() {
            this.$confirm('是否确定退出登录？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(_ => {
                this.routeGo({name: 'Login'})
            }).catch(_ => {})
        }
    },
}
</script>

<style lang="scss">
@import '@/style/business/home_page.scss';
</style>