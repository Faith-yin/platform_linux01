<!--
 * @author: 殷鹏飞
 * @Date: 2019-12-27 15:58:28
 * @information: 顶部导航菜单
-->
<template>
    <div id="top-nav-menu">
        <div class="top-nav-menu-main">
            <el-menu    default-active="1"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#FFF3D9"
                        text-color="#333"
                        active-text-color="#ff6700">
                <el-menu-item index="1">课程学习资源</el-menu-item>
                <el-menu-item index="2">课程模板设计</el-menu-item>
                <el-menu-item index="3">学习资源使用统计</el-menu-item>
                <el-menu-item index="4">信息发布</el-menu-item>
                <el-menu-item index="5">用户权限管理</el-menu-item>
                <el-menu-item index="6">用户管理</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
import publicClass from '@/mixins/public_class.js'

export default {
    mixins: [publicClass],
    data() {
        return {

        }
    },
    methods: {
        /**
         * @author: 殷鹏飞
         * @Date: 2019-12-27 16:41:01
         * @information: 选择一导航栏
         */
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
        }
    }
}
</script>

<style lang="scss">
#top-nav-menu {
    background-color: #FFF3D9;
    .top-nav-menu-main {
        width: 1200px;
        margin: 0 auto 10px;
        .el-menu-item {
            font-size: 16px;
        }
    }
}
</style>