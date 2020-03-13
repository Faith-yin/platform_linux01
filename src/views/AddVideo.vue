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
                      :before-remove="beforeRemove"
                      :http-request="addFile"
                      :limit='1'
                      accept=".mp4"> 
            <el-button  class="video-btn"
                        slot="trigger"
                        size="small"
                        type="primary">选取文件</el-button>
            <p class="msg-info">视频文件大小不能超过1000MB</p>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="checkForm()">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import publicInfo from '@/relyClass/public_info.js'
import publicClass from '@/mixins/public_class.js'
import {Message} from 'element-ui'

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
      this.fileData = val.file
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-13 11:55:34
     * @Description: 删除文件
     */
    beforeRemove() { 
      this.fileData = {}
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-12 11:22:13
     * @Description: 校验表单
     */
    checkForm() {
      let {title, content} = this.videoForm
      // 表单校验
      let mark = this.formRequired({arr: {title, content}})
      if(!mark)return;
      // 校验是否添加视频文件
      if(!Object.keys(this.fileData).length)return Message({showClose: true, message: '请添加视频文件', type: 'warning'})
      // 视频文件大小校验(<1000MB || < 1048576000B)
      if(this.fileData.size > 1048576000)return Message({showClose: true, message: '视频文件大小不能大于1000MB', type: 'warning'})
      // 调用上传文件至服务器
      this.uploadFile()
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-11 17:45:53
     * @Description: 上传文件至服务器
     */
    uploadFile() {
      // 创建表单对象
      let formData = new FormData()
      // 触发组件自带方法
      this.$refs.uploadRef.submit()
      // 将文件数据转成表单对象
      formData.append('file', this.fileData)
      // 请求模板参数
      let methodModel = {
        pMethod: this.uploadVideo(formData),
        callBack: 'uploadFileCallBack',
      }
      this.methodQuery(methodModel)
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-12 09:48:44
     * @Description: 上传文件至服务器回调
     */
    uploadFileCallBack({data}) {
      this.videoForm.link = data
      // 调用提交表单
      this.submitForm()
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-10 18:12:47
     * @Description: 提交
     */
    submitForm() {
      // 从 sessionStorage 中获取用户id
      let {id} = JSON.parse(sessionStorage.getItem('userInfo'))
      // 请求参数
      let model = {
        userId: id,
        date: this.timeFormat(new Date()),
        checkStatus: 2,
        ...this.videoForm,
      }
      // 请求模板参数
      let methodModel = {
        pMethod: this.addVideo(model),
        message: '提交成功, 审核通过后将会显示',
        callBack: 'submitFormCallBack',
      }
      this.methodQuery(methodModel)
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-10 18:13:02
     * @Description: 提交回调
     */
    submitFormCallBack(res) {
      // 清空表单
      let arr = ['title', 'content', 'link']
      arr.forEach(el => {this.videoForm[el] = null})
      this.$refs.uploadRef.clearFiles()
    },
  },
  mounted() {
    // 判断是否登录状态
    let mark = this.judgeLogin()
    if(!mark) return this.routeGo({name: 'Login'})
  },
}
</script>

<style lang="scss">
@import '@/style/business/add-video.scss';
</style>