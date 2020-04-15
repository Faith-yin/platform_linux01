<!--
 * @author: 殷鹏飞
 * @Date: 2020-04-15 18:43:06
 * @information: 404
-->
<template>
  <div id="not-fond-page">
    <div>
      <img src="@/assets/img/404.png" width="300px" height="300px">
    </div>
    <p>在这个星球找不到你想要的页面啦，返回首页吧~</p>
    <el-button type="primary" size="medium" @click="backHome">返回首页</el-button>
  </div>
</template>

<script>
import publicClass from '@/mixins/public_class.js'

export default {
  mixins: [publicClass],
  data() {
    return {}
  },
  methods: {
    /**
     * @author: 殷鹏飞
     * @Date: 2020-04-15 18:53:18
     * @information: 返回首页
     */
    backHome() {
      let routeModel = {
        name: 'HomePage',
        params: { backTab: '1' }
      }
      this.routeGo(routeModel)
    },
  }

}
</script>

<style lang="scss">
#not-fond-page {
  width: 100%;
  margin-top: 200px;
  text-align: center;
  p {
    margin: 20px 0;
  }
}
</style>