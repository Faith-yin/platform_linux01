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
      <el-form  label-position="right" 
                label-width="80px" :model="personForm" 
                ref="ruleForm"
                :rules="rules" >
        <!-- 头像上传 -->
        <el-form-item label="用户头像"> 
          <el-upload  class="upload-demo"
                      ref="uploadRef"
                      action=""
                      :limit='1'
                      :file-list='fileList'
                      accept=".jpg, .png"
                      :before-remove="beforeRemove"
                      :http-request="addFile">
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
          </el-upload>
        </el-form-item>
        <!-- 用户信息 -->
        <el-form-item label="用户名称" prop="username" required>
          <el-input v-model="personForm.username" 
                    show-word-limit
                    maxlength=12
                    placeholder='请输入名称, 2~12字符(必填)' 
                    clearable></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="password" required>
          <el-input placeholder='请输入密码, 6~12字符(必填) '
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
          <el-button type="primary" @click="checkFile()">提交</el-button>
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
        photo: null,
      },
      // sessionStorage 中的用户信息
      userInfo: {},
      // 文件数据
      fileData: {},
      // 文件列表
      fileList: [],
      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          {required: true, message: '名称不可为空', trigger: 'blur'},
          { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          {required: true, message: '密码不可为空', trigger: 'blur'},
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
      },
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
     * @Date: 2020-03-13 11:44:06
     * @Description: 删除文件
     */
    beforeRemove() {
      this.fileData = {}
      this.personForm.photo = ''
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-13 11:36:07
     * @Description: 核验是否有添加文件
     */
    checkFile() {
      // 如果没有上传文件 or 没有修改文件，直接提交表单
      if(!Object.keys(this.fileData).length)return this.submitForm()
      return this.uploadFile()
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
      this.$refs.registerForm.validate().then(() => {
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
      })

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
    // 判断是否登录状态
    let mark = this.judgeLogin()
    if(!mark) return this.routeGo({name: 'Login'})
    // 从 sessionStorage 中获取用户信息
    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    let arr = ['username', 'password', 'sex', 'birthday', 'description', 'photo']
    // 将已有的个人信息放至表单中
    arr.forEach(el => {
      this.userInfo[el] && (this.personForm[el] = this.userInfo[el])
    })
    // 若存在头像，则放至列表中以显示
    this.userInfo.photo && this.fileList.push({name: 'photo', url: this.userInfo.photo})
  },
}
</script>

<style lang="scss">
@import '@/style/business/person_info.scss';
</style>