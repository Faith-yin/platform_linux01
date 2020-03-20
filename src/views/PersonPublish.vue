<!--
 * @Author: 殷鹏飞
 * @Date: 2020-03-19 13:57:19
 * @Description: 我的发布页面
-->
<template>
  <div id="person-publish">
    <!-- 顶部区域 -->
    <div class="top-wrapper">
      <div class="title-info">
        <img src="@/assets/img/linux-logo.jpg" alt="linux_logo">
        <div class="top-title">Linux 学习平台</div>
      </div>
    </div>
    <!-- 页头 -->
    <div class="header-wrapper">
      <el-page-header @back="goBack" content="我的发布"></el-page-header>
    </div>
    <!-- 主体区域 -->
    <div class="body-wrapper">
      <!-- 左侧tab -->
      <el-tabs tab-position="left" v-model="activeName" @tab-click='handleTab' style="height: 200px;">
        <!-- 文章 -->
        <el-tab-pane label="文章信息" name="1">
          <div class="right-wrapper">
            <div class="item-wrapper" v-for="(item,index) in dataList" :key="index">
              <div class="display--flex">
                <div class="title-info" @click="itemClick(item)">
                  <div class="title-desc">标题：</div>
                  <div class="title-text font-hidden">{{item.title}}</div>
                </div>
                <el-tag :type="item.checkStatus==1
                        ?'warning'
                        :item.checkStatus==2
                          ?'success'
                          :'danger'">{{checkStatusFormatter(item.checkStatus)}}</el-tag>
              </div>
              <div class="date-info">发布时间：{{timeFormat(item.date)}}</div>
              <el-divider></el-divider>
            </div>
          </div>
        </el-tab-pane>
        <!-- 课程视频 -->
        <el-tab-pane label="课程视频" name="2">
          <div class="right-wrapper">
            <div class="item-wrapper" v-for="(item,index) in dataList" :key="index">
              <div class="display--flex">
                <div class="title-info" @click="itemClick(item)">
                  <div class="title-desc">标题：</div>
                  <div class="title-text font-hidden">{{item.title}}</div>
                </div>
                <el-tag :type="item.checkStatus==1
                        ?'warning'
                        :item.checkStatus==2
                          ?'success'
                          :'danger'">{{checkStatusFormatter(item.checkStatus)}}</el-tag>
              </div>
              <div class="date-info">发布时间：{{timeFormat(item.date)}}</div>
              <el-divider></el-divider>
            </div>
          </div>
        </el-tab-pane>
        <!-- issues -->
        <el-tab-pane label="Issues" name="3">
          <div class="right-wrapper">
            <div class="item-wrapper" v-for="(item,index) in dataList" :key="index">
              <div class="display--flex">
                <div class="title-info" @click="itemClick(item)">
                  <div class="title-desc">问题：</div>
                  <div class="title-text font-hidden">{{item.title}}</div>
                </div>
                <el-tag>评论数：{{item.commentNum}}</el-tag>
              </div>
              <div class="date-info">提问时间：{{timeFormat(item.date)}}</div>
              <el-divider></el-divider>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>

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
      // 激活tab
      activeName: '1',
      // 用户信息
      userInfo: {},
      // 数据列表
      dataList: [],
    }
  },
  methods: {
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-19 14:53:56
     * @Description: 返回事件
     */
    goBack() {
      this.routeGo({name: 'HomePage'})
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-19 14:59:44
     * @Description: tab切换
     */
    handleTab(val) {
      this.activeName = val.name
      this.fetchData()
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-19 16:43:58
     * @Description: 某一项被点击
     */
    itemClick(item) {
      // 将点击的一项信息存至sessionStorage中
      sessionStorage.setItem('itemDetail', JSON.stringify(item))
      let {routerName} = this.publishTabPortMethods.find(el => el.selectedTab == this.activeName)
      // 路由参数
      let routeModel = {
        path: `/${routerName}/${item.id}`,
        query: {type: 'getBack'}
      }
      this.routeGo(routeModel)
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-19 16:00:09
     * @Description: 获取信息
     */
    fetchData() {
      let {id} = this.userInfo
      let {portMethod} = this.publishTabPortMethods.find(el => el.selectedTab == this.activeName)
      // 请求模板参数
      let methodModel = {
        pMethod: this[portMethod]({userId: id}),
        callBack: 'fetchDataCallBack',
      }
      this.methodQuery(methodModel)
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-19 16:00:43
     * @Description: 获取信息回调
     */
    fetchDataCallBack({data}) {
      this.dataList = data
    },
  },
  mounted() {
    // 判断是否登录状态
    let mark = this.judgeLogin()
    if(!mark) return this.routeGo({name: 'Login'})
    // 从 sessionStorage 中获取用户信息
    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    // 获取信息
    this.fetchData()
  },
}
</script>

<style lang="scss">
@import '@/style/business/person_publish.scss';
</style>
