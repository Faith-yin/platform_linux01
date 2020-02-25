<!--
 * @Author: 殷鹏飞
 * @Date: 2020-02-24 19:33:40
 * @Description: 侧滑组件
-->
<template>
  <el-drawer  id="drawer-wrapper"
              title='个人信息'
              size='45%'
              :visible.sync="drawerMark"
              direction='rtl'
              :before-close='resetForm'>
    <el-form label-position="right" label-width="80px" :model="personForm" ref="ruleForm">
      <el-form-item label="用户名称" required>
        <el-input v-model="personForm.username" maxlength='12' placeholder='最大12个字符' clearable></el-input>
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
        <el-input v-model="personForm.description" placeholder='输入几句话介绍一下自己吧...' type="textarea" rows=4></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm()">取消</el-button>
        <el-button type="primary" @click="submitForm()">提交</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script>
import publicClass from '@/mixins/public_class.js'

export default {
  mixins: [publicClass],
  data() {
    return {
      // 侧滑窗口开关
      drawerMark: false,
      // 表单内容
      personForm: {
        username: null,
        sex: null,
        birthday: null,
        description: null,
      }
    }
  },
  methods: {
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-02-25 14:48:01
     * @Description: 提交表单
     */
    submitForm() {
      // 校验必填项
      let {username} = this.personForm
      let mark = this.formRequired({arr: [username],msg: '请输入用户名称'})
      if(!mark)return;
      // console.log(this.personForm);
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-02-25 14:48:31
     * @Description: 取消操作
     */
    resetForm() {
      // 清空表单值
      let arr = ['username','sex','birthday','description']
      arr.forEach(el => this.personForm[el] = null)
      // 关闭窗口
      this.drawerMark = false
    }
  }
}
</script>

<style lang="scss">
#drawer-wrapper {
  .el-drawer__body {
    padding: 20px;
  }
}
</style>
