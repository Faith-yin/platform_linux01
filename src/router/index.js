/*
 * @author: 殷鹏飞
 * @Date: 2019-12-25 18:29:31
 * @information: 路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', //登录页面
      name: 'Login',
      component: () => import('@/views/Login')
    },
    {
      path: '/Register', //注册页面
      name: 'Register',
      component: () => import('@/views/Register')
    },
    {
      path: '/HomePage', //主页面
      name: 'HomePage',
      component: () => import('@/views/HomePage')
    },
    {
      path: '/DetailInformation/:id', //公告详情页面
      name: 'DetailInformation',
      component: () => import('@/views/DetailInformation')
    },
    {
      path: '/DetailArticle/:id', //文章详情页面
      name: 'DetailArticle',
      component: () => import('@/views/DetailArticle')
    },
    {
      path: '/DetailVideo/:id', //视频详情页面
      name: 'DetailVideo',
      component: () => import('@/views/DetailVideo')
    },
    {
      path: '/DetailIssues/:id', //issues详情页面
      name: 'DetailIssues',
      component: () => import('@/views/DetailIssues')
    },
    {
      path: '/DetailOutsideLink/:id', //站外链接详情页面
      name: 'DetailOutsideLink',
      component: () => import('@/views/DetailOutsideLink')
    },
  ]
})