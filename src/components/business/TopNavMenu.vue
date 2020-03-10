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
                <el-menu-item index=1>最新公告</el-menu-item>
                <el-menu-item index=2>最新文章</el-menu-item>
                <el-menu-item index=3>课程资源</el-menu-item>
                <el-menu-item index=4>Issues探讨区</el-menu-item>
                <el-menu-item index=5>站外学习链接</el-menu-item>
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
        .el-menu-demo {
          margin-top: 72px;
        }
        .el-menu-item {
            margin: 0 40px;
            font-size: 16px;
        }
    }
}
</style>