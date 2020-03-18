<!--
 * @Author: 殷鹏飞
 * @Date: 2020-03-10 16:22:00
 * @Description: 写文章 页面
 *
  字段说明：
    checkStatus 审核标志：3未通过，2通过，1审核中(默认)
-->
<template>
  <div id="add-article">
    <!-- 顶部区域 -->
    <div class="top-wrapper">
      <div class="title-info">
        <img src="@/assets/img/linux-logo.jpg" alt="linux_logo">
        <div class="top-title">Linux 管理学习平台</div>
      </div>
    </div>
    <!-- 页头 -->
    <div class="header-wrapper">
      <el-page-header @back="goBack" content="写文章"></el-page-header>
    </div>
    <!-- 主体区域 -->
    <div class="body-wrapper">
      <el-form  label-position="right" 
                label-width="80px" 
                :model="articleForm" 
                ref="ruleForm">
        <el-form-item label="题目" required>
          <el-input v-model="articleForm.title" 
                    show-word-limit
                    maxlength=20
                    placeholder='输入标题...' 
                    clearable></el-input>
        </el-form-item>
        <el-form-item label="内容" required>
          <el-input v-model="articleForm.content" 
                    placeholder='输入内容...' 
                    type="textarea" 
                    rows=30></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">提交</el-button>
        </el-form-item>
      </el-form>
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
      // 表单
      articleForm: {
        title: null,
        content: null,
      }
    }
  },
  methods: {
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-10 16:28:09
     * @Description: 返回事件
     */
    goBack() {
      this.routeGo({name: 'HomePage'})
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-10 17:03:11
     * @Description: 提交操作
     */
    submitForm() {
      // 表单检验
      let mark = this.formRequired({arr: this.articleForm, msg: '请输入必填项'})
      if(!mark)return;
      // 从 sessionStorage 中获取用户id
      let {id} = JSON.parse(sessionStorage.getItem('userInfo'))
      // 请求参数
      let model = {
        userId: id,
        date: this.timeFormat(new Date()),
        checkStatus: 1,
        ...this.articleForm,
      }
      // 请求模板参数
      let methodModel = {
        pMethod: this.addArticle(model),
        message: '提交成功, 审核通过后将会显示',
        callBack: 'submitFormCallBack',
      }
      this.methodQuery(methodModel)
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-10 17:31:45
     * @Description: 提交回调
     */
    submitFormCallBack(res) {
      // 清空表单
      let arr = ['title', 'content']
      arr.forEach(el => {this.articleForm[el] = null})
    },
  },
  mounted() {
    // 判断是否登录状态
    let mark = this.judgeLogin()
    if(!mark) return this.routeGo({name: 'Login'})
  }
}
</script>

<style lang="scss">
@import '@/style/business/add-article.scss';
</style>