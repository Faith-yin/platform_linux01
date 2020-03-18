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
                  <div class="top-title">Linux 学习平台</div>
              </div>
              <!-- 搜索框 -->
              <div class="base-search">
                <el-input placeholder="搜索感兴趣的资源"
                          prefix-icon="el-icon-search"
                          clearable
                          size="medium"
                          v-model="searchValue"
                          @keyup.enter.native="searchClick">
                </el-input>
                <div class="btn-box">
                    <el-button  type="primary"
                                @click="searchClick"
                                size="medium">搜索</el-button>
                </div>
              </div>
              <!-- 个人中心 -->
              <el-dropdown @command="handleCommand">
                <div class="userinfo-wrapper">
                  <div class="photo-wrapper">
                    <el-avatar :size="50" :src="userInfo.photo" icon='el-icon-user'></el-avatar>
                  </div>
                  <span class="el-dropdown-link">
                    {{userInfo.username || '未知用户'}}<i class="el-icon-arrow-down"></i>
                  </span>
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="personClick" icon="el-icon-user-solid">个人信息</el-dropdown-item>
                  <el-dropdown-item command="loginOut" icon="el-icon-switch-button">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
        </div>
        <!-- 顶部导航栏 -->
        <top-nav-menu @handleSelect="selectTabClick"
                      :selectedTab='selectedTab'/>
        <!-- 主体区域 -->
        <div class="body">
          <!-- 列表容器 -->
          <div class="list-container">
            <list-information v-if="selectedTab==1" 
                              :dataList="selectedTab==1&&dataList" 
                              @listClick="listClick"></list-information>
            <list-article v-if="selectedTab==2" 
                          :dataList="selectedTab==2&&dataList" 
                          @listClick="listClick"
                          @addArticle="routeGo({name: 'AddArticle'})"></list-article>
            <list-video v-if="selectedTab==3" 
                        :dataList="selectedTab==3&&dataList" 
                        @listClick="listClick"
                        @addVideo="routeGo({name: 'AddVideo'})"></list-video>
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
          //输入框值
          searchValue: null,
          // 用户信息
          userInfo: {},
          // 当前tabbar选择项,默认是[最新公告]
          selectedTab: '1',
          // 数据列表
          dataList: [],
        }
    },
    methods: {
      /**
       * @Author: 殷鹏飞
       * @Date: 2020-02-24 18:42:57
       * @Description: 我的 被点击
       */   
      handleCommand(val) {
        this[val]()
      },
      /**
       * @Author: 殷鹏飞
       * @Date: 2020-02-24 19:35:34
       * @Description: 个人信息被点击
       */
      personClick () {
        this.routeGo({name: 'PersonInfo'})
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
          type: 'warning',
          closeOnClickModal: false,
        }).then(_ => {
          // 清空 sessionStorage 中存放的信息
          sessionStorage.clear()
          this.routeGo({name: 'Login'})
        }).catch(_ => {})
      },
      /**
       * @Author: 殷鹏飞
       * @Date: 2020-03-12 20:49:59
       * @Description: 搜索被点击
       */
      searchClick() {
        this.fetchListData()
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
        // 请求模板参数
        let methodModel = {
          pMethod: this[updatePortMethod]({id, viewCount}),
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
        let {routerName} = this.tabToRouterArr.find(el => el.selectedTab == this.selectedTab)
        this.routeGo({path: `/${routerName}/${data[0].id}`})
        // 将返回的详情 存至 sessionStorage 中
        sessionStorage.setItem('itemDetail', JSON.stringify(data[0]))
      },
      /**
       * @Author: 殷鹏飞
       * @Date: 2020-03-09 10:06:19
       * @Description: 获取页面列表信息
       */
      fetchListData() {
        let {searchValue} = this
        let {portMethod} = this.tabToRouterArr.find(el => el.selectedTab == this.selectedTab)
        // 请求模板参数
        let methodModel = {
          pMethod: this[portMethod]({value: searchValue}),
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
      // 判断是否登录状态
      let mark = this.judgeLogin()
      if(!mark) return this.routeGo({name: 'Login'})
      // 从 sessionStorage 中获取用户信息
      this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
      // 若从tab中返回来的: 还留在相应tab
      let {backTab} = this.$route.params
      if(backTab) this.selectedTab = backTab
      this.fetchListData()
    }
}
</script>

<style lang="scss">
@import '@/style/business/home_page.scss';
</style>