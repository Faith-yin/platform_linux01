<!--
 * @Author: 殷鹏飞
 * @Date: 2020-02-25 16:03:08
 * @Description: 最新公告列表组件
-->
<template>
  <div id="new-information">
    <el-card shadow="hover" v-for="(item,index) in dataList" :key="index" class="information-item">
      <div class="title-wapper">
        <div class="title" @click="listClick(index)">{{item.title}}</div>
      </div>
      <div class="conten-wapper">
        <div class="content color--333">{{item.content}}</div>
      </div>
      <div class="bottom-wapper color--999">
        <div class="mr--30">发布者：{{item.username}}</div>
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
     * @Date: 2020-03-04 11:42:01
     * @Description: 列表被点击
     */
    listClick(index) {
      this.$emit('listClick', index)
    },
  }
}
</script>

<style lang="scss">
#new-information {
  .information-item {
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