<!--
 * @Author: 殷鹏飞
 * @Date: 2020-03-04 14:01:49
 * @Description: 最新文章列表组件
-->
<template>
  <div id="new-article">
    <!-- 上方区域 -->
    <div class="add-wrapper">
      <div class="add_text">如果你有新的相关知识想要分享，请点击右侧按钮以写文章...</div>
      <el-button @click="addArticle" type="primary" icon="el-icon-edit">写文章</el-button>
    </div>
    <!-- 列表区域 -->
    <el-card shadow="hover" v-for="(item,index) in dataList" :key="index" class="article-item">
      <div class="title-wapper">
        <div class="title" @click="$emit('listClick',index)">{{item.title}}</div>
      </div>
      <div class="conten-wapper">
        <div class="content color--333">{{item.content}}</div>
      </div>
      <div class="bottom-wapper color--999">
        <div class="mr--30">作者：{{item.username}}</div>
        <div class="mr--30">发布时间：{{timeFormat(item.date)}}</div>
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
     * @Date: 2020-03-10 16:14:04
     * @Description: 写文章按钮被点击
     */
    addArticle() {
      this.$emit('addArticle')
    },
  },
}
</script>

<style lang="scss">
#new-article {

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

  .article-item {
    margin: 10px 0;
    border-radius: 5px;
    background-color: #fff;
    .title-wapper {
      .title {
        font-size: 20px;
        font-weight: 500;
        &:hover {
          cursor: pointer;
          color: #d33a2a;
        }
      }
    }
    .conten-wapper {
      height: 40px;
      margin: 15px 0;
      // 多行溢出...
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      .content {
        font-size: 15px;
      }
    }
    .bottom-wapper {
      display: flex;
      font-size: 14px;
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
