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
                        active-text-color="#409EFF">
                <el-menu-item index="1">最新信息</el-menu-item>
                <el-menu-item index="2">文章视图</el-menu-item>
                <el-menu-item index="3">视频资源</el-menu-item>
                <el-menu-item index="4">issues探讨区</el-menu-item>
                <el-menu-item index="5">站外学习链接</el-menu-item>
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
      handleSelect(index) {
        this.$emit('handleSelect', index)
      }
    }
}
</script>

<style lang="scss">
#top-nav-menu {
    background-color: #FFF3D9;
    .top-nav-menu-main {
        display: flex;
        justify-content: center;
        margin: 0 auto 10px;
        .el-menu-item {
            margin: 0 40px;
            font-size: 16px;
        }
    }
}
</style>