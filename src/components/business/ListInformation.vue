<!--
 * @Author: 殷鹏飞
 * @Date: 2020-02-25 16:03:08
 * @Description: 最新公告列表组件
-->
<template>
  <div id="new-information">
    <div v-for="(item,index) in arr" :key="index" class="information-item">
      <div class="title-wapper">
        <div class="title" @click="listClick(index)">{{item.title}}</div>
      </div>
      <div class="conten-wapper">
        <div class="content color--333">{{item.content}}</div>
      </div>
      <div class="bottom-wapper color--999">
        <div class="mr--30">发布者：{{item.author}}</div>
        <div class="mr--30">发布时间：{{item.date}}</div>
        <div>浏览次数：{{item.lookNum}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 信息列表（暂时）
      arr: [
        {title: '这是题目1', author: '殷鹏飞', content: '这是内容1据国家卫健3月4日，宁夏应对新型冠状病毒肺炎疫情工作指挥部发布最新全区新冠肺炎疫情通报。2020年3月3日0-24时，全区新增1例新冠肺炎确诊病例（永宁县1例，疑似转确诊）委数据统计，3月3日0—24时，31个省（自治区、直辖市）和新疆生产建设兵团报告新增确诊病例119例，湖北新增确诊病例115例（武汉114例），全国除湖北外新增确诊病例4例，其中包括宁夏新增1例、北京新增3例', date: '2020-02-25', lookNum: 11, comment: '这是评论1.。'},
        {title: '这是题目2', author: '殷鹏飞', content: '这是内容2....', date: '2020-02-22', lookNum: 22, comment: '这是评论2。。'},
        {title: '这是题目3', author: '殷鹏飞', content: '这是内容2....', date: '2020-02-22', lookNum: 22, comment: '这是评论2。。'},
        {title: '这是题目4', author: '殷鹏飞', content: '这是内容2....', date: '2020-02-22', lookNum: 22, comment: '这是评论2。。'},
        {title: '这是题目5', author: '殷鹏飞', content: '这是内容2....', date: '2020-02-22', lookNum: 22, comment: '这是评论2。。'},
        {title: '这是题目6', author: '殷鹏飞', content: '这是内容2....', date: '2020-02-22', lookNum: 22, comment: '这是评论2。。'},
        {title: '这是题目7', author: '殷鹏飞', content: '这是内容2....', date: '2020-02-22', lookNum: 22, comment: '这是评论2。。'},
      ]
    }
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