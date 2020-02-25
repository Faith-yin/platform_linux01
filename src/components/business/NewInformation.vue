<!--
 * @Author: 殷鹏飞
 * @Date: 2020-02-25 16:03:08
 * @Description: 最新信息列表组件
-->
<template>
  <div id="new-information">
    <div v-for="(item,index) in arr" :key="index" class="information-item">
      <div class="title-wapper">
        <div class="title">{{item.title}}</div>
        <div>发布时间：{{item.date}}</div>
      </div>
      <div class="conten-wapper">
        <div class="content">{{item.content}}</div>
      </div>
      <div>浏览次数：{{item.lookNum}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 信息列表（暂时）
      arr: [
        {title: '这是题目1',content: '这是内容1....', date: '2020-02-25', lookNum: 11, comment: '这是评论1.。'},
        {title: '这是题目2',content: '这是内容2....', date: '2020-02-22', lookNum: 22, comment: '这是评论2。。'},
        {title: '这是题目3',content: '这是内容2....', date: '2020-02-22', lookNum: 22, comment: '这是评论2。。'},
        {title: '这是题目4',content: '这是内容2....', date: '2020-02-22', lookNum: 22, comment: '这是评论2。。'},
        {title: '这是题目5',content: '这是内容2....', date: '2020-02-22', lookNum: 22, comment: '这是评论2。。'},
        {title: '这是题目6',content: '这是内容2....', date: '2020-02-22', lookNum: 22, comment: '这是评论2。。'},
        {title: '这是题目7',content: '这是内容2....', date: '2020-02-22', lookNum: 22, comment: '这是评论2。。'},
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
#new-information {
  .information-item {
    margin: 10px 0;
    padding: 10px;
    box-sizing: border-box;
    background-color: rgb(252, 243, 243);
    .title-wapper {
      display: flex;
      justify-content: space-between;
      .title {
        font-weight: 600;
        font-size: 22px;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>