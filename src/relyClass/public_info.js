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
      // 配置对象
      tabToRouterArr: [
        {
          selectedTab: 1, 
          routerName: 'DetailInformation', 
          portMethod: 'showAllInformation',
          updatePortMethod: 'updateInformation',
        },
        {
          selectedTab: 2, 
          routerName: 'DetailArticle', 
          portMethod: 'showAllArticle',
          updatePortMethod: 'updateArticle',
        },
        {
          selectedTab: 3, 
          routerName: 'DetailVideo', 
          portMethod: 'showAllVideo',
          updatePortMethod: 'updateVideo',
        },
        {
          selectedTab: 4, 
          routerName: 'DetailIssues', 
          portMethod: 'showAllIssues',
          updatePortMethod: 'updateIssues',
        },
        {
          selectedTab: 5,
          routerName: 'DetailOutsideLink', 
          portMethod: 'showAllOutsidelink',
          updatePortMethod: 'updateOutsidelink',
        },
      ]
    }
  },
  methods: {
    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-08 09:39:17
     * @Description: user 操作接口
     */    
    // 查询全部
    showAllUser() {
      return publicApi.showAllArticle()
    },
    // 条件查询：根据用户名称 和 用户密码查询
    findUserByNameAndPassword(model) {
      return publicApi.findUserByNameAndPassword(model)
    },
    // 添加
    addUser(model) {
      return publicApi.addUser(model)
    },
    // 修改
    updateUserById(model) {
      return publicApi.updateUserById(model)
    },


    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-08 09:45:51
     * @Description: information公告 操作接口
     */
      // 查询全部
      showAllInformation() {
        return publicApi.showAllInformation()
      },
      // 条件查询：按照管理员id查询
      findInformationByAdminId(model) {
        return publicApi.findInformationByAdminId(model)
      },
      // 修改
      updateInformation(model) {
        return publicApi.updateInformation(model)
      },


    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-08 09:51:08
     * @Description: article文章 操作接口
     */    
      // 查询全部
      showAllArticle() {
        return publicApi.showAllArticle()
      },
      // 添加
      addArticle(model) {
        return publicApi.addArticle(model)
      },
      // 修改
      updateArticle(model) {
        return publicApi.updateArticle(model)
      },


    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-08 09:54:31
     * @Description: video 操作接口
     */    
    // 查询全部
    showAllVideo() {
      return publicApi.showAllVideo()
    },
    // 修改
    updateVideo(model) {
      return publicApi.updateVideo(model)
    },


    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-08 09:55:35
     * @Description: issues 操作接口
     */  
    // 查询全部
    showAllIssues() {
      return publicApi.showAllIssues()
    },
    // 添加
    addIssues(model) {
      return publicApi.addIssues(model)
    },
    // 修改
    updateIssues(model) {
      return publicApi.updateIssues(model)
    },
    // issuesComment 查询全部
    showAllIssuesComment() {
      return publicApi.showAllIssuesComment()
    },
    // issuesComment 条件查询：根据归属问题issueId查询
    findIssuesCommentByIssuesId(model) {
      return publicApi.findIssuesCommentByIssuesId(model)
    },
    // issuesComment 添加
    addIssuesComment(model) {
      return publicApi.addIssuesComment(model)
    },


    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-08 10:02:33
     * @Description: outsidelink 操作接口
     */  
    // 查询全部
    showAllOutsidelink() {
      return publicApi.showAllOutsidelink()
    },
    // 修改
    updateOutsidelink(model) {
      return publicApi.updateOutsidelink(model)
    },


  }
}