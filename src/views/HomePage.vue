<!--
 * @author: 殷鹏飞
 * @Date: 2019-12-25 18:46:44
 * @information: 主页面路由
-->
<template>
    <div id="home-page">
        <!-- 顶部信息 -->
        <div class="top-wrapper">
            <div class="header">
                <!-- 标题区域 -->
                <div class="title-info">
                    <img src="@/assets/img/linux-logo.jpg" alt="linux_logo">
                    <div class="top-title">Linux 管理学习平台</div>
                </div>
                <!-- 搜索框 -->
                <base-search />
                <!-- 个人中心 -->
                <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                    你好，欢迎{{username}}<i class="el-icon-arrow-down"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="drawerOpen" icon="el-icon-user-solid">个人信息</el-dropdown-item>
                    <el-dropdown-item command="myHoard" icon="el-icon-star-on">我的收藏</el-dropdown-item>
                    <el-dropdown-item command="loginOut" icon="el-icon-switch-button">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <!-- 顶部导航栏 -->
        <top-nav-menu @handleSelect="selectTabClick" />
        <!-- 侧滑窗口 -->
        <Drawer ref="drawerRef" />
        <!-- 主体区域 -->
        <div class="body">
          <!-- 列表容器 -->
          <div class="list-container">
            <list-information v-if="selectedTab==1" @listClick="listClick"></list-information>
            <list-article v-if="selectedTab==2" @listClick="listClick"></list-article>
            <list-video v-if="selectedTab==3" @listClick="listClick"></list-video>
            <list-issues v-if="selectedTab==4" @listClick="listClick"></list-issues>
            <list-outside-link v-if="selectedTab==5" @listClick="listClick"></list-outside-link>
          </div>
        </div>
        <!-- 底部区域 -->
        <div class="footer">—— 系统由 Vue+Java+ElementUI 驱动 ——</div>
    </div>
</template>

<script>
import publicInfo from '@/relyClass/public_info.js'
import publicClass from '@/mixins/public_class.js'

export default {
    mixins: [publicInfo, publicClass],
    data() {
        return {
          // 用户名称
          username: '殷鹏飞',
          // 当前tabbar选择项,默认是[最新公告]
          selectedTab: 1,
        }
    },
    methods: {
      /**
       * @Author: 殷鹏飞
       * @Date: 2020-02-24 18:42:57
       * @Description: 个人中心选项被点击
       */   
      handleCommand(val) {
        this[val]()
      },
      /**
       * @Author: 殷鹏飞
       * @Date: 2020-02-24 19:35:34
       * @Description: 侧滑窗口打开
       */
      drawerOpen () {
        this.$refs.drawerRef.drawerMark = true
      },
      /**
       * @Author: 殷鹏飞
       * @Date: 2020-02-25 15:33:53
       * @Description: 我的收藏被点击
       */
      myHoard() {

      },
      /**
       * @author: 殷鹏飞
       * @Date: 2019-12-27 19:08:27
       * @information: 退出登录点击
       */
      loginOut() {
        this.$confirm('确定退出登录？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(_ => {
          this.routeGo({name: 'Login'})
        }).catch(_ => {})
      },
      /**
       * @Author: 殷鹏飞
       * @Date: 2020-03-05 11:38:20
       * @Description: tab选项卡点击
       */
      selectTabClick(val) {
        this.selectedTab = val
      },
      /**
       * @Author: 殷鹏飞
       * @Date: 2020-03-05 10:40:16
       * @Description: 列表被点击
       */
      listClick(val) {
        let {routerName} = this.tabToRouterArr.find(el => el.selectedTab == this.selectedTab)
        this.routeGo({
          path: `/${routerName}/${val+1}`,
        })
      },
    },
}
</script>

<style lang="scss">
@import '@/style/business/home_page.scss';
</style>