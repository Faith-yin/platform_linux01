<!--
 * @author: 殷鹏飞
 * @Date: 2020-03-29 09:14:51
 * @information: 验证码组件
-->
<template>
  <div  class="valid-code"
        :style="`width: ${width}; height: ${height}`"
        @click="refreshCode">
    <div  class="item-code"
          v-for="(item, index) in codeList"
          :key="index"
          :style="getStyle(item)">{{item.code}}</div>
  </div>
</template>

<script>
export default {
  props: {
    // 宽度
    width: {
      type: String,
      default: '100px',
    },
    // 高度
    height: {
      type: String,
      default: '30px',
    },
    // 长度
    length: {
      type: Number,
      default: 4,
    },
  },
  data() {
    return {
      // 验证码
      codeList: [],
    }
  },
  methods: {
    // 刷新验证码
    refreshCode () {
      this.createdCode()
    },
    // 生成验证码
    createdCode() {
      let codeArr = [],
          chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789'
      for(let i = 0; i < this.length; i++) {
        let rgb = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
        codeArr.push({
          code: chars.charAt(Math.floor(Math.random() * chars.length)),
          color: `rgb(${rgb})`,
          fontSize: `1${[Math.floor(Math.random() * 10)]}px`,
          padding: `${[Math.floor(Math.random() * 10)]}px`,
          transform: `rotate(${Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)}deg)`
        })
      }
      this.codeList = codeArr
      let validCode = codeArr.map(el => el.code).join('')
      // 将当前数据派发出去
      this.$emit('createValue', validCode)
    },
    // 获取样式
    getStyle(val) {
      return `color: ${val.color}; font-size: ${val.fontSize}; padding: ${val.padding}; transform: ${val.transform}`
    },
  },
  mounted() {
    this.createdCode()
  },
}
</script>

<style lang="scss">
.valid-code {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>