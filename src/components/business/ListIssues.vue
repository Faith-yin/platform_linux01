<!--
 * @Author: 殷鹏飞
 * @Date: 2020-03-04 14:13:29
 * @Description: issues列表组件
-->
<template>
  <div id="issues">
    <!-- 输入框部分 -->
    <div class="form-wrapper">
      <div class="form_input">
        <el-input type="textarea"
                  rows=3
                  maxlength=100
                  show-word-limit
                  placeholder="我有新的问题..."
                  v-model="issueValue"></el-input>
      </div>
      <el-button @click="addIssue" type="primary" size="small" icon="el-icon-circle-plus-outline">提问Issue</el-button>
    </div>
    <!-- issues列表 -->
    <el-card shadow="hover" v-for="(item,index) in dataList" :key="index" class="issue-item">
      <div class="title-wrapper">
        <div class="title" @click="listClick(index)">{{item.title}}</div>
      </div>
      <div class="content-wrapper">
        <div class="mr--30">提问者：{{item.username}}</div>
        <div class="mr--30">提问时间：{{timeFormat(item.date)}}</div>
        <div>浏览次数：{{item.viewCount}}</div>
      </div>
    </el-card>
  </div>
</template>

<script>
import publicClass from '@/mixins/public_class.js'
import publicInfo from '@/relyClass/public_info.js'

export default {
  props: {
    // 数据列表
    dataList: {
      type: Array,
      default: [],
    }
  },
  mixins: [publicClass, publicInfo],
  data() {
    return {
      // issue 输入框值
      issueValue: null,
    }
  },
  methods: {
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-04 16:01:27
     * @Description: 列表被点击
     */
    listClick(index) {
      this.$emit('listClick', index)
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-06 16:08:08
     * @Description: 添加 issue
     */
    addIssue() {
      let {issueValue} = this
      // 检验输入内容是否为空
      if(!issueValue || !this.checkBlankSpace(issueValue)) {
        return this.$message({
          showClose: true,
          message: 'issue 不能为空',
          type: 'warning'
        })
      }
      // 从sessionStorage 获取用户信息
      let {id} = JSON.parse(sessionStorage.getItem('userInfo'))
      let model = {
        title: issueValue,
        userId: id,
        date: this.timeFormat(new Date()),
      }
      // 请求参数
      let methodModel = {
        pMethod: 'addIssues',
        params: model,
        callBack: 'addIssueCallBack',
      }
      this.methodQuery(methodModel)
    },
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-09 17:14:49
     * @Description: 添加issue回调事件
     */
    addIssueCallBack(res) {
      this.$message({
        showClose: true,
        message: '添加成功',
        type: 'success'
      })
      // 清空输入框值
      this.issueValue = null
      // 重新加载列表数据以更新列表
      this.$emit('refreshFetchList')
    },
  }
}
</script>

<style lang="scss">
#issues {
  .form-wrapper {
    .form_username {
      padding: 10px 0;
      color: #ff6700;
    }
    .form_input {
      padding-bottom: 10px;
    }
    .el-button--primary {
      background-color: #FFF3D9;
      border-color: rgb(248, 226, 181);
      color: #333;
      &:hover {
        background-color: rgb(248, 226, 181);
      }
      .el-button--small {
        padding: 9px 8px;
      }
    }
  }

  .issue-item {
    margin: 10px 0;
    border-radius: 5px;
    background-color: #fff;
    .title-wrapper {
      .title {
        font-size: 20px;
        font-weight: 500;
        word-break: break-all;
        &:hover {
          cursor: pointer;
          color: #d33a2a;
        }
      }
    }
    .content-wrapper {
      display: flex;
      margin-top: 15px;
      font-size: 14px;
      color: #999;
    }
  }
}
</style>