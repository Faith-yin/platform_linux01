/*
 * @author: 殷鹏飞
 * @Date: 2019-12-26 14:26:43
 * @information: 业务层
 */
import publicApi from '@/api/public_api.js'

export default {
  mixins: [],
  data() {
    return {
      // tab列表对应的详情页
      tabToRouterArr: [
        {selectedTab: 1, routerName: 'DetailInformation'},
        {selectedTab: 2, routerName: 'DetailArticle'},
        {selectedTab: 3, routerName: 'DetailVideo'},
        {selectedTab: 4, routerName: 'DetailIssues'},
        {selectedTab: 5, routerName: 'DetailOutsideLink'},
      ]
    }
  },
  methods: {
    /**
     * @author: 殷鹏飞
     * @Date: 2019-12-26 14:25:53
     * @information: 获取用户详情
     */
    getUserDetail() {
        return publicApi.getUserDetail()
    }
  }
}