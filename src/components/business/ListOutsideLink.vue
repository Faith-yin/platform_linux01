<!--
 * @Author: 殷鹏飞
 * @Date: 2020-03-04 14:41:32
 * @Description: 站外学习链接列表组件
-->
<template>
  <div id="outside-link">
    <el-card shadow="hover" v-for="(item,index) in dataList" :key="index" class="outside-item">
      <div class="title-wrapper">
        <div class="title" @click="$emit('listClick',index)">{{item.title}}</div>
      </div>
      <div class="content-wrapper">
        <div class="content">{{item.content}}</div>
      </div>
      <div class="bottom-wrapper">
        <div class="mr--30">添加者：{{item.username}}</div>
        <div>浏览次数：{{item.viewCount}}</div>
      </div>
    </el-card>
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
#outside-link {
  .outside-item {
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
}
</style>
