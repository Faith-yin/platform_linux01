<!--
 * @Author: 殷鹏飞
 * @Date: 2020-03-04 14:01:49
 * @Description: 最新文章列表组件
-->
<template>
  <div id="new-article">
    <div v-for="(item,index) in dataList" :key="index" class="article-item">
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
  methods: {},
}
</script>

<style lang="scss">
#new-article {
  .article-item {
    margin: 10px 0;
    padding: 18px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #fff;
    .title-wapper {
      .title {
        font-size: 22px;
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
}
</style>
