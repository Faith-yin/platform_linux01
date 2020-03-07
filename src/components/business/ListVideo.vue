<!--
 * @Author: 殷鹏飞
 * @Date: 2020-03-04 14:47:21
 * @Description: 视频列表组件
-->
<template>
  <div id="video-list">
    <div v-for="(item,index) in arr" :key="index" class="video-item">
      <div class="title-wrapper">
        <div class="title" @click="$emit('listClick',index)">{{item.title}}</div>
      </div>
      <div class="content-wrapper">
        <div class="content">{{item.content}}</div>
      </div>
      <div class="bottom-wrapper">
        <div class="mr--30">添加者：{{item.author}}</div>
        <div class="mr--30">上传日期：{{item.date}}</div>
        <div>浏览次数：{{item.viewCount}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {title: '这是视频标题1', content: '这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，', link: 'https://www.mi.com', author: '殷鹏飞',viewCount: 29, date: '2020-03-07 15:15:00'},
        {title: '这是视频标题2', content: '这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，', link: 'https://www.mi.com', author: '殷鹏飞',viewCount: 29, date: '2020-03-07 15:15:00'},
        {title: '这是视频标题3', content: '这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，', link: 'https://www.mi.com', author: '殷鹏飞',viewCount: 29, date: '2020-03-07 15:15:00'},
        {title: '这是视频标题4', content: '这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，', link: 'https://www.mi.com', author: '殷鹏飞',viewCount: 29, date: '2020-03-07 15:15:00'},
        {title: '这是视频标题5', content: '这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，', link: 'https://www.mi.com', author: '殷鹏飞',viewCount: 29, date: '2020-03-07 15:15:00'},
        {title: '这是视频标题6', content: '这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，', link: 'https://www.mi.com', author: '殷鹏飞',viewCount: 29, date: '2020-03-07 15:15:00'},
        {title: '这是视频标题7', content: '这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，', link: 'https://www.mi.com', author: '殷鹏飞',viewCount: 29, date: '2020-03-07 15:15:00'},
        {title: '这是视频标题8', content: '这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，', link: 'https://www.mi.com', author: '殷鹏飞',viewCount: 29, date: '2020-03-07 15:15:00'},
        {title: '这是视频标题9', content: '这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，这是视屏的内容，想学习的小伙伴可以点进去哦，', link: 'https://www.mi.com', author: '殷鹏飞',viewCount: 29, date: '2020-03-07 15:15:00'},
      ]
    }
  },
  methods: {
    
  },
}
</script>

<style lang="scss">
#video-list {
  .video-item {
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
      margin: 15px 0;
      font-size: 15px;
    }
    .bottom-wrapper {
      display: flex;
      font-size: 14px;
      color: #999;
    }
  }
}
</style>