<!--
 * @Author: 殷鹏飞
 * @Date: 2020-03-04 14:01:49
 * @Description: 最新文章列表组件
-->
<template>
  <div id="new-article">
    <div v-for="(item,index) in arr" :key="index" class="article-item">
      <div class="title-wapper">
        <div class="title" @click="$emit('listClick',index)">{{item.title}}</div>
      </div>
      <div class="conten-wapper">
        <div class="content color--333">{{item.content}}</div>
      </div>
      <div class="bottom-wapper color--999">
        <div class="mr--30">作者：{{item.author}}</div>
        <div class="mr--30">发布时间：{{item.date}}</div>
        <div>浏览次数：{{item.viewCount}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 列表信息（暂时）
      arr: [
        {title: '这是题目2',content: '这是内容2....', date: '2020-02-22', author: '殷鹏飞', viewCount: 22, comment: '这是评论2。。'},
        {title: '这是题目2',content: '这是内容2....', date: '2020-02-22', author: '殷鹏飞', viewCount: 22, comment: '这是评论2。。'},
        {title: '这是题目2',content: '这是内容2....', date: '2020-02-22', author: '殷鹏飞', viewCount: 22, comment: '这是评论2。。'},
      
      ]
    }
  },
  methods: {
  },
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
