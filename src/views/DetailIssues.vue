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
      <div class="title-wrapper">{{data.title}}</div>
      <div class="info-wrapper mb--20">
        <div class="one-info mr--30"><i class="el-icon-user"></i> {{data.username}}</div>
        <div class="mr--30"><i class="el-icon-date"></i> {{timeFormat(data.date)}}</div>
        <div><i class="el-icon-view"></i> {{data.viewCount}}次浏览</div>
      </div>
      <!-- 用户评论 字样 -->
      <div class="comment-wrapper">
        <div class="comment_title">用户评论({{commentList.length || 0}})：</div>
      </div>
      <!-- 表单输入框 -->
      <div class="form-wrapper">
        <div class="form_username">{{userInfo.username || '未知用户'}}：</div>
        <div class="form_input">
          <el-input type="textarea"
                    rows=3
                    maxlength=240
                    show-word-limit
                    placeholder="我有新的想法..."
                    v-model="commentValue"></el-input>
        </div>
        <el-button @click="addComment" type="primary" size="small" icon="el-icon-edit">发表评论</el-button>
      </div>
      <!-- 评论列表区域 -->
      <div class="content-wrapper">
        <div v-if="!commentList.length" class="empty-content">暂无评论</div>
        <div class="content-item" v-for="(item,index) in commentList" :key="index">
          <div class="content-title">
            <div class="content-title_num">#{{index+1}}楼&nbsp;&nbsp;</div>
            <div class="content-title_username">{{item.username || '未知用户'}}</div>
          </div>
          <div class="content_content">{{item.content}}</div>
          <div class="content_date">{{timeFormat(item.date)}}</div>
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
      // 用户信息
      userInfo: {},
      // 输入框值
      commentValue: null,
      // 详情信息
      data: {},
      // 评论列表
      commentList: [],
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
      let {commentValue} = this
      // 检验输入内容是否为空
      if(!commentValue || !this.checkBlankSpace(commentValue)) {
        return this.$message({
          showClose: true,
          message: '评论内容不能为空',
          type: 'warning'
        })
      }
      let model = {
        issueId: this.data.id,
        userId: this.userInfo.id,
        content: commentValue,
        date: this.timeFormat(new Date()),
      }
      // 请求参数
      let methodModel = {
        pMethod: 'addIssuesComment',
        params: model,
        callBack: 'addCommentCallBack',
      }
      this.methodQuery(methodModel)
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-09 19:31:25
     * @Description: 添加评论回调
     */
    addCommentCallBack(res) {
      this.$message({
        showClose: true,
        message: '添加成功',
        type: 'success'
      })
      // 清空输入框值
      this.commentValue = null
      // 重新加载列表数据以更新列表
      this.fetchCommentList()
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-09 18:59:34
     * @Description: 加载评论列表
     */
    fetchCommentList() {
      // 请求参数
      let methodModel = {
        pMethod: 'findIssuesCommentByIssuesId',
        params: this.data.id,
        callBack: 'fetchCommentListCallBack',
      }
      this.methodQuery(methodModel)
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-09 19:32:14
     * @Description: 加载评论列表回调
     */
    fetchCommentListCallBack({data}) {
      this.commentList = data
    },
  },
  mounted() {
    // 从 sessionStorage 中获取详情信息
    this.data = JSON.parse(sessionStorage.getItem('itemDetail'))
    // 从 sessionStorage 中获取用户信息
    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    this.fetchCommentList()
  },
}
</script>

<style lang="scss">
@import '@/style/business/detail_issues.scss';
</style>