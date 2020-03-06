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
        <div class="top-title">Linux 管理学习平台</div>
      </div>
    </div>
    <!-- 页头 -->
    <div class="header-wrapper">
      <el-page-header @back="goBack" content="公告详情"></el-page-header>
    </div>
    <!-- 主体区域 -->
    <div class="body-wrapper">
      <div class="title-wrapper">{{obj.title}}</div>
      <div class="info-wrapper mb--20">
        <div class="one-info mr--30"><i class="el-icon-user"></i> {{obj.username}}</div>
        <div class="mr--30"><i class="el-icon-date"></i> {{obj.date}}</div>
        <div><i class="el-icon-view"></i> {{obj.viewCount}}次浏览</div>
      </div>
      <div class="content-wrapper">{{obj.content}}</div>
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
      // 详情信息（暂时）
      obj: {title: '这是公告标题，做测试用呢',content: '50元跟着胖哥学一年，掌握程序的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。',username: '殷鹏飞',date: '2020-03-05 10:57:49',viewCount: 19}
    }
  },
  methods: {
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-06 11:32:11
     * @Description: 返回事件
     */
    goBack() {
      this.routeGo({
        name: 'HomePage'
      })
    },
  },
  mounted() {
    
  },
}
</script>

<style lang="scss">
@import '@/style/business/detail_information.scss';
</style>
