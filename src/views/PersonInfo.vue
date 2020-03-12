<!--
 * @Author: 殷鹏飞
 * @Date: 2020-03-10 14:42:58
 * @Description: 个人信息 页面
-->
<template>
  <div id="person_info">
    <!-- 顶部区域 -->
    <div class="top-wrapper">
      <div class="title-info">
        <img src="@/assets/img/linux-logo.jpg" alt="linux_logo">
        <div class="top-title">Linux 管理学习平台</div>
      </div>
    </div>
    <!-- 页头 -->
    <div class="header-wrapper">
      <el-page-header @back="goBack" content="个人信息"></el-page-header>
    </div>
    <!-- 表单组件 -->
    <div class="form-wrapper">
      <el-form label-position="right" label-width="80px" :model="personForm" ref="ruleForm">
        <!-- 头像上传 -->
        <el-form-item label="用户头像"> 
          <el-upload  class="upload-demo"
                      ref="uploadRef"
                      action=""
                      :limit='1'
                      accept=".jpg, .png"
                      :http-request="addFile">
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
          </el-upload>
        </el-form-item>
        <!-- 用户信息 -->
        <el-form-item label="用户名称" required>
          <el-input v-model="personForm.username" 
                    show-word-limit
                    maxlength=12
                    placeholder='请输入名称, 最长12位(必填)' 
                    clearable></el-input>
        </el-form-item>
        <el-form-item label="用户密码" required>
          <el-input placeholder='请输入密码, 最长12位(必填) '
                    v-model="personForm.password"
                    show-word-limit
                    maxlength=12 
                    show-password></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="personForm.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
            <el-radio label="保密"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker v-model="personForm.birthday"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="我的签名">
          <el-input v-model="personForm.description" 
                    placeholder='输入几句话介绍一下自己吧...' 
                    type="textarea" 
                    rows=4
                    show-word-limit
                    maxlength=240></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="uploadFile()">提交</el-button>
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
      // 表单内容
      personForm: {
        username: null,
        password: null,
        sex: null,
        birthday: null,
        description: null,
        photo: null
      },
      // sessionStorage 中的用户信息
      userInfo: {},
      // 文件数据
      fileData: {},
    }
  },
  methods: {
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-10 14:53:56
     * @Description: 返回事件
     */
    goBack() {
      this.routeGo({name: 'HomePage'})
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-12 15:31:37
     * @Description: 添加图片文件
     */
    addFile(val) {
      this.fileData = val.file
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-12 16:11:09
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
        pMethod: this.uploadImg(formData),
        callBack: 'uploadFileCallBack',
      }
      this.methodQuery(methodModel)
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-12 16:11:17
     * @Description: 上传文件至服务器回调
     */
    uploadFileCallBack({data}) {
      this.personForm.photo = data
      // 调用提交表单
      this.submitForm()
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-02-25 14:48:01
     * @Description: 提交表单
     */
    submitForm() {
      let {personForm, userInfo} = this
      let {username, password, sex, birthday, description, photo} = personForm
      let {id} = userInfo
      // 校验必填项
      let mark = this.formRequired({arr: [username, password], msg: '请输入表单必填项'})
      if(!mark)return;
      // 请求参数
      let model = {id, username, password, sex, birthday, description, photo}
      // 若未修改名称，则入参去掉 username
      userInfo.username === username && (model.username = undefined)
      // 请求模板参数
      let methodModel = {
        pMethod: this.updateUserById(model),
        message: '提交保存成功',
        callBack: 'submitFormCallBack',
      }
      this.methodQuery(methodModel)
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-10 15:17:49
     * @Description: 提交表单回调
     */
    submitFormCallBack(res) {
      let {userInfo, personForm} = this
      // 将保存后的数据存至本地 sessionStorage 中
      sessionStorage.setItem('userInfo', JSON.stringify({...userInfo, ...personForm}))
    }, 
  },
  mounted() {
    // 从 sessionStorage 中获取用户信息
    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    let arr = ['username', 'password', 'sex', 'birthday', 'description']
    // 将已有的个人信息放至表单中
    arr.forEach(el => {
      this.userInfo[el] && (this.personForm[el] = this.userInfo[el])
    })
  },
}
</script>

<style lang="scss">
@import '@/style/business/person_info.scss';
</style>