<!--
 * @Author: 殷鹏飞
 * @Date: 2020-03-10 17:53:24
 * @Description: 添加视频资源 页面
-->
<template>
  <div id="add-video">
    <!-- 顶部区域 -->
    <div class="top-wrapper">
      <div class="title-info">
        <img src="@/assets/img/linux-logo.jpg" alt="linux_logo">
        <div class="top-title">Linux 管理学习平台</div>
      </div>
    </div>
    <!-- 页头 -->
    <div class="header-wrapper">
      <el-page-header @back="goBack" content="上传课程资源"></el-page-header>
    </div>
    <!-- 主体区域 -->
    <div class="body-wrapper">
      <el-form label-position="right" label-width="80px" :model="videoForm" ref="ruleForm">
        <el-form-item label="题目" required>
          <el-input v-model="videoForm.title" 
                    show-word-limit
                    maxlength=20
                    placeholder='输入标题...' 
                    clearable></el-input>
        </el-form-item>
        <el-form-item label="内容" required>
          <el-input v-model="videoForm.content" 
                    placeholder='输入内容...' 
                    type="textarea" 
                    rows=20></el-input>
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
      videoForm: {
        title: null,
        content: null,
        link: null,
      }
    }
  },
  methods: {
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-10 17:56:19
     * @Description: 返回事件
     */
    goBack() {
      this.routeGo({name: 'HomePage'})
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-10 18:12:47
     * @Description: 提交
     */
    submitForm() {

    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-10 18:13:02
     * @Description: 提交回调
     */
    submitForm() {

    },
  },
}
</script>

<style lang="scss">
@import '@/style/business/add-video.scss';
</style>