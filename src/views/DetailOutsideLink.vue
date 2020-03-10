<!--
 * @Author: 殷鹏飞
 * @Date: 2020-03-06 12:21:06
 * @Description: 站外链接详情页面
-->
<template>
  <div id="detail-outsidelink">
    <!-- 顶部区域 -->
    <div class="top-wrapper">
      <div class="title-info">
        <img src="@/assets/img/linux-logo.jpg" alt="linux_logo">
        <div class="top-title">Linux 管理学习平台</div>
      </div>
    </div>
    <!-- 页头 -->
    <div class="header-wrapper">
      <el-page-header @back="goBack" content="站外链接详情"></el-page-header>
    </div>
    <!-- 主体区域 -->
    <div class="body-wrapper">
      <div class="title-wrapper">{{data.title}}</div>
      <div class="info-wrapper mb--20">
        <div class="one-info mr--30"><i class="el-icon-user"></i> {{data.username}}</div>
        <div><i class="el-icon-view"></i> {{data.viewCount}}次浏览</div>
      </div>
      <div class="content-wrapper">{{data.content}}</div>
      <div class="link-wrapper">
        <el-link :href="data.link" icon="el-icon-position" type="success">点击跳转学习链接...</el-link>
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
      // 详情信息
      data: {},
    }
  },
  methods: {
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-06 14:57:44
     * @Description: 返回事件
     */
    goBack() {
      this.routeGo({
        name: 'HomePage'
      })
    },
  },
  mounted() {
    // 从 sessionStorage 中获取详情信息
    this.data = JSON.parse(sessionStorage.getItem('itemDetail'))
  },
}
</script>

<style lang="scss">
@import '@/style/business/detail_outsidelink.scss';
</style>