<!--
 * @Author: 殷鹏飞
 * @Date: 2020-03-04 14:47:21
 * @Description: 视频列表组件
-->
<template>
  <div id="video-list">
    <!-- 上方区域 -->
    <div class="add-wrapper">
      <div class="add_text">如果你有新的学习课程想要上传，请点击右侧按钮以上传课程资源...</div>
      <el-button @click="addVideo" type="primary" icon="el-icon-edit">上传课程资源</el-button>
    </div>
    <!-- 列表区域 -->
    <el-card shadow="hover" v-for="(item,index) in dataList" :key="index" class="video-item">
      <div class="title-wrapper">
        <div class="title" @click="$emit('listClick',index)">{{item.title}}</div>
      </div>
      <div class="content-wrapper">
        <div class="content font-hidden">{{item.content}}</div>
      </div>
      <div class="bottom-wrapper">
        <div class="mr--30">添加者：{{item.username}}</div>
        <div class="mr--30">上传日期：{{timeFormat(item.date)}}</div>
        <div>浏览次数：{{item.viewCount}}</div>
      </div>
    </el-card>
    <!-- 无数据时 -->
    <div v-if="!dataList.length" class="nodata-wrapper">
      暂无数据
    </div>
  </div>
</template>

<script>
import publicClass from '@/mixins/public_class.js'

export default {
  props: {
    // 数据列表
    dataList: {
      type: Array,
      default: [],
    }
  },
  mixins: [publicClass],
  data() {
    return {}
  },
  methods: {
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-10 18:00:45
     * @Description: 添加按钮被点击
     */
    addVideo() {
      this.$emit('addVideo')
    },
  },
}
</script>

<style lang="scss">
#video-list {

  .add-wrapper {
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    .add_text {
      font-size: 16px;
      line-height: 40px;
      color: #333;
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

  .video-item {
    margin: 10px 0;
    border-radius: 5px;
    background-color: #fff;
    .title-wrapper {
      .title {
        font-size: 20px;
        font-weight: 500;
        &:hover {
          cursor: pointer;
          color: #d33a2a;
        }
      }
    }
    .content-wrapper {
      margin: 15px 0;
      font-size: 15px;
    }
    .bottom-wrapper {
      display: flex;
      font-size: 14px;
      color: #999;
    }
  }

  //无数据时
  .nodata-wrapper {
    font-size: 17px;
    color: #333;
    text-align: center;
    line-height: 300px;
  }
}
</style>