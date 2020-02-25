<!--
 * @Author: 殷鹏飞
 * @Date: 2020-02-24 16:45:32
 * @Description: 轮播图
-->
<template>
  <div id="slide-show">
    <el-carousel trigger="click" height="300px">
      <el-carousel-item>
        <a class="link link1" href="#">
          <img class="banner-slide-img" src="@/assets/img/01.jpg" alt="轮播图01">
        </a>
      </el-carousel-item>
      <el-carousel-item>
        <a class="link link2" href="#">
          <img class="banner-slide-img" src="@/assets/img/02.jpg" alt="轮播图02">
        </a>
      </el-carousel-item>
      <el-carousel-item>
        <a class="link link3" href="#">
          <img class="banner-slide-img" src="@/assets/img/03.jpg" alt="轮播图03">
        </a>
      </el-carousel-item>
      <el-carousel-item>
        <a class="link link4" href="#">
          <img class="banner-slide-img" src="@/assets/img/04.jpg" alt="轮播图04">
        </a>
      </el-carousel-item>
      <el-carousel-item>
        <a class="link link5" href="#">
          <img class="banner-slide-img" src="@/assets/img/05.jpg" alt="轮播图05">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style lang="scss">
#slide-show {
  .el-carousel__item {
    height: 300px;
    display: flex;
    justify-content: center;
    .link {
      width: inherit;
      display: flex;
      .banner-slide-img {
        height: 100%;
        margin: 0 auto;
      }
    }
    .link1 {
      background-color: #1F4E78;
    }
    .link2 {
      background-color: #4644CC;
    }
    .link3 {
      background-color: #E70509;
    }
    .link4 {
      background-color: #256FEC;
    }
    .link5 {
      background-color: #000000;
    }
  }
}
</style>