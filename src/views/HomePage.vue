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
                    你好，欢迎 {{userInfo.username || '未知用户'}}<i class="el-icon-arrow-down"></i>
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
            <list-information v-if="selectedTab==1" 
                              :dataList="selectedTab==1&&dataList" 
                              @listClick="listClick"></list-information>
            <list-article v-if="selectedTab==2" 
                          :dataList="selectedTab==2&&dataList" 
                          @listClick="listClick"></list-article>
            <list-video v-if="selectedTab==3" 
                        :dataList="selectedTab==3&&dataList" 
                        @listClick="listClick"></list-video>
            <list-issues  v-if="selectedTab==4" 
                          :dataList="selectedTab==4&&dataList" 
                          @listClick="listClick"
                          @refreshFetchList="fetchListData"></list-issues>
            <list-outside-link  v-if="selectedTab==5" 
                                :dataList="selectedTab==5&&dataList" 
                                @listClick="listClick"></list-outside-link>
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
          // 用户信息
          userInfo: {},
          // 当前tabbar选择项,默认是[最新公告]
          selectedTab: 1,
          // 数据列表
          dataList: [],
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
          // 清空 sessionStorage 中存放的信息
          sessionStorage.clear()
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
        this.fetchListData()
      },
      /**
       * @Author: 殷鹏飞
       * @Date: 2020-03-05 10:40:16
       * @Description: 列表被点击
       */
      listClick(val) {
        let {updatePortMethod} = this.tabToRouterArr.find(el => el.selectedTab == this.selectedTab)
        let {id, viewCount} = this.dataList[val]
        viewCount ++  // 浏览次数加一
        // 请求参数
        let methodModel = {
          pMethod: updatePortMethod,
          params: {id, viewCount},
          callBack: 'listClickCallBack',
        }
        this.methodQuery(methodModel)
      },
      /**
       * @Author: 殷鹏飞
       * @Date: 2020-03-09 10:54:48
       * @Description: 列表点击回调
       */
      listClickCallBack({data}) {
        // 将返回的详情 存至 sessionStorage 中
        sessionStorage.setItem('itemDetail', JSON.stringify(data[0]))
        let {routerName} = this.tabToRouterArr.find(el => el.selectedTab == this.selectedTab)
        this.routeGo({path: `/${routerName}/${data[0].id}`})
      },
      /**
       * @Author: 殷鹏飞
       * @Date: 2020-03-09 10:06:19
       * @Description: 获取页面列表信息
       */
      fetchListData() {
        let {portMethod} = this.tabToRouterArr.find(el => el.selectedTab == this.selectedTab)
        // 请求参数
        let methodModel = {
          pMethod: portMethod,
          callBack: 'fetchListDataCallBack',
        }
        this.methodQuery(methodModel)
      },
      /**
       * @Author: 殷鹏飞
       * @Date: 2020-03-09 10:12:45
       * @Description: 获取页面列表信息回调
       */
      fetchListDataCallBack({data}) {
        this.dataList = data
      },
    },
    mounted() {
      // 从 sessionStorage 中获取用户信息
      this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
      this.fetchListData()
    }
}
</script>

<style lang="scss">
@import '@/style/business/home_page.scss';
</style>