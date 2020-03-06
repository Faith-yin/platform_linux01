<!--
 * @Author: 殷鹏飞
 * @Date: 2020-03-06 12:20:57
 * @Description: issues详情页面
-->
<template>
  <div id="detail-issues">
    <!-- 顶部区域 -->
    <div class="top-wrapper">
      <div class="title-info">
        <img src="@/assets/img/linux-logo.jpg" alt="linux_logo">
        <div class="top-title">Linux 管理学习平台</div>
      </div>
    </div>
    <!-- 页头 -->
    <div class="header-wrapper">
      <el-page-header @back="goBack" content="Issue详情"></el-page-header>
    </div>
    <!-- 主体区域 -->
    <div class="body-wrapper">
      <div class="title-wrapper">{{obj.title}}</div>
      <div class="info-wrapper mb--20">
        <div class="one-info mr--30"><i class="el-icon-user"></i> {{obj.username}}</div>
        <div class="mr--30"><i class="el-icon-date"></i> {{obj.date}}</div>
        <div><i class="el-icon-view"></i> {{obj.viewCount}}次浏览</div>
      </div>
      <!-- 用户评论 字样 -->
      <div class="comment-wrapper">
        <div class="comment_title">用户评论({{arr.length || 0}})：</div>
      </div>
      <!-- 表单输入框 -->
      <div class="form-wrapper">
        <div class="form_username">殷鹏飞：</div>
        <div class="form_input">
          <el-input type="textarea"
                    rows=3
                    placeholder="我有不同的理解..."
                    v-model="commentValue"></el-input>
        </div>
        <el-button @click="addComment" type="primary" size="small" icon="el-icon-edit">发表评论</el-button>
      </div>
      <!-- 评论列表区域 -->
      <div class="content-wrapper">
        <div class="content-item" v-for="(item,index) in arr" :key="index">
          <div class="content-title">
            <div class="content-title_num">#{{index+1}}&nbsp;&nbsp;</div>
            <div class="content-title_username">{{item.username}}</div>
          </div>
          <div class="content_content">{{item.content}}</div>
          <div class="content_date">{{item.date}}</div>
        </div>
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
      // 
      commentValue: null,
      // 详情信息 暂时
      obj: {title: 'linux命令内核是如何工作的？', username: '小明',date: '2020-03-03 14:19:40', viewCount: 93,},
      // 详情评论 暂时
      arr: [
        {username: '寒名', date: '2020-03-04 09:34:01', content: '这个最好你自己百度哦，印象深刻！'},
        {username: '寒名1', date: '2020-03-04 09:34:01', content: '这个最好你自己百度哦，印象深刻！'},
        {username: '寒名2', date: '2020-03-04 09:34:01', content: '这个最好你自己百度哦，印象深刻！'},
        {username: '寒名3', date: '2020-03-04 09:34:01', content: '这个最好你自己百度哦，印象深刻！'},
        {username: '寒名4', date: '2020-03-04 09:34:01', content: '这个最好你自己百度哦，印象深刻！'},
        {username: '寒名4', date: '2020-03-04 09:34:01', content: '这个最好你自己百度哦，印象深刻！'},
        {username: '寒名4', date: '2020-03-04 09:34:01', content: '这个最好你自己百度哦，印象深刻！'},
        {username: '寒名4', date: '2020-03-04 09:34:01', content: '这个最好你自己百度哦，印象深刻！'},

      ],
    }
  },
  methods: {
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-06 14:12:06
     * @Description: 返回事件
     */
    goBack() {
      this.routeGo({
        name: 'HomePage'
      })
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-06 15:29:18
     * @Description: 添加评论
     */
    addComment() {

    },
  },
}
</script>

<style lang="scss">
@import '@/style/business/detail_issues.scss';
</style>