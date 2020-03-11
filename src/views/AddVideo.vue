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
        <!-- 上传视频区域 -->
        <el-form-item label="视频" required>
          <el-upload  class="avatar-uploader el-upload--text"
                      ref="uploadRef"
                      action="" 
                      :http-request="addFile"
                      :before-remove="beforeRemove"
                      :limit=1
                      accept=".mp4"> 
            <el-button  class="video-btn"
                        slot="trigger"
                        size="small"
                        v-if="showBtnMark"
                        type="primary">选取文件</el-button>
          </el-upload>
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
      },
      // 显示[选取文件]按钮标志
      showBtnMark: true, 
      // 文件数据
      fileData: {},
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
     * @Date: 2020-03-11 16:18:31
     * @Description: 添加文件
     */
    addFile(val) {
      this.showBtnMark = false
      this.fileData = val.file
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-11 17:49:45
     * @Description: 去掉文件
     */
    beforeRemove() {
      this.showBtnMark = true
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-11 17:45:53
     * @Description: 上传文件至服务器
     */
    async uploadFile() {
      // 创建表单对象
      let formData = new FormData()
      // 触发组件自带方法
      this.$refs.uploadRef.submit()
      // 将文件数据转成表单对象
      formData.append('file', this.fileData)
      let res = await this.uploadVideo(formData)
      console.log('上传成功了-->',res);
    },








    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-10 18:12:47
     * @Description: 提交
     */
    submitForm() {
      this.uploadFile()
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-10 18:13:02
     * @Description: 提交回调
     */
    submitFormCallBack() {

    },
  },
}
</script>

<style lang="scss">
@import '@/style/business/add-video.scss';
</style>