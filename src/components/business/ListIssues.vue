<!--
 * @Author: 殷鹏飞
 * @Date: 2020-03-04 14:13:29
 * @Description: issues列表组件
-->
<template>
  <div id="issues">
    <div v-for="(item,index) in arr" :key="index" class="issue-item">
      <div class="title-wrapper">
        <div class="title" @click="listClick(index)">{{item.title}}</div>
      </div>
      <div class="content-wrapper">
        <div class="mr--30">提问者：{{item.username}}</div>
        <div class="mr--30">提问时间：{{item.date}}</div>
        <div>浏览次数：{{item.viewCount}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 列表数据（暂时）
      arr: [
        {title: 'linux命令内核是如何工作的？', date: '2020-02-20 15:40:05', username: '小明', viewCount: 11},
        {title: 'linux命令内核是如何工作的？', date: '2020-02-20 15:40:05', username: '小明', viewCount: 11},
        {title: 'linux命令内核是如何工作的？', date: '2020-02-20 15:40:05', username: '小明', viewCount: 11},
        {title: 'linux命令内核是如何工作的？', date: '2020-02-20 15:40:05', username: '小明', viewCount: 11},
      ]
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
    }
  }
}
</script>

<style lang="scss">
#issues {
  .issue-item {
    margin: 10px 0;
    padding: 18px;
    box-sizing: border-box;
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
      display: flex;
      margin-top: 15px;
      font-size: 14px;
      color: #999;
    }
  }
}
</style>