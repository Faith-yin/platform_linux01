<!--
 * @Author: 殷鹏飞
 * @Date: 2020-03-06 09:48:58
 * @Description: 公告详情页面
-->
<template>
  <div id="detail-page">
    <!-- 顶部区域 -->
    <div class="top-wrapper">
      <div class="title-info">
        <img src="@/assets/img/linux-logo.jpg" alt="linux_logo">
        <div class="top-title">Linux系统管理学习平台</div>
      </div>
    </div>
    <!-- 页头 -->
    <div class="header-wrapper">
      <el-page-header @back="goBack" content="公告详情"></el-page-header>
    </div>
    <!-- 主体区域 -->
    <div class="body-wrapper">
      <div class="title-wrapper">{{data.title}}</div>
      <div class="info-wrapper mb--20">
        <div class="one-info mr--30"><i class="el-icon-user"></i> {{data.username}}</div>
        <div class="mr--30"><i class="el-icon-date"></i> {{timeFormat(data.date)}}</div>
        <div><i class="el-icon-view"></i> {{data.viewCount}}次浏览</div>
      </div>
      <div class="content-wrapper" v-html="data.content"></div>
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
      // 详情数据
      data: {},
    }
  },
  methods: {
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-06 11:32:11
     * @Description: 返回事件
     */
    goBack() {
      let routeModel = {
        name: 'HomePage',
        params: { backTab: '1' }
      }
      this.routeGo(routeModel)
    },
  },
  mounted() {
    // 判断是否登录状态
    let mark = this.judgeLogin()
    if(!mark) return this.routeGo({name: 'Login'})
    // 从 sessionStorage 中获取详情信息
    this.data = JSON.parse(sessionStorage.getItem('itemDetail'))
  },
}
</script>

<style lang="scss">
@import '@/style/business/detail_information.scss';
</style>
