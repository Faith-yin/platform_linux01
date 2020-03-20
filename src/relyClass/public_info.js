/*
 * @author: 殷鹏飞
 * @Date: 2019-12-26 14:26:43
 * @information: 业务层
 */
import publicApi from '@/api/public_api.js'
import publicClass from '@/mixins/public_class.js'
import { Message } from 'element-ui'

export default {
  mixins: [publicClass],
  data() {
    return {
      // 主页面tab 配置对象
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
      ],
      // 个人发布页面tab 配置对象
      publishTabPortMethods: [
        {
          selectedTab: 1,
          portMethod: 'findArticleByUserId',
          routerName: 'DetailArticle',
        },
        {
          selectedTab: 2,
          portMethod: 'findVideoByUserId',
          routerName: 'DetailVideo',
        },
        {
          selectedTab: 3,
          portMethod: 'findIssuesByUserId',
          routerName: 'DetailIssues',
        },
      ],
    }
  },
  methods: {

// -------------------------业务方法----------------------------------------


  /**
   * @Author: 殷鹏飞
   * @Date: 2020-03-13 13:39:04
   * @Description: 判断是否登录状态
   */
  judgeLogin() {
    // 从 sessionStorage 中获取用户信息
    let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    // 如果没有用户信息，即未登录
    if(!userInfo || !Object.keys(userInfo).length) {
      Message({showClose: true, message: '请用户登录', type: 'warning'})
      return false
    }
    return true
  },

    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-17 11:29:42
     * @Description: 审核状态格式化： 数字-->文字
     */    
    checkStatusFormatter(value) {
      let str =''
      if(value == 3) str = '未通过'
      if(value == 2) str = '已通过'
      if(value == 1) str = '审核中'
      return str
    },


// -------------------------接口方法----------------------------------------


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
      showAllInformation(model) {
        return publicApi.showAllInformation(model)
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
      showAllArticle(model) {
        return publicApi.showAllArticle(model)
      },
      // 条件查询：按照用户id查询 所有状态的
      findArticleByUserId(model) {
        return publicApi.findArticleByUserId(model)
      },
      // 添加
      addArticle(model) {
        return publicApi.addArticle(model)
      },
      // 修改
      updateArticle(model) {
        return publicApi.updateArticle(model)
      },
      // 添加
      addVideo(model) {
        return publicApi.addVideo(model)
      },


    /**
     * @Author: 殷鹏飞
     * @Date: 2020-03-08 09:54:31
     * @Description: video 操作接口
     */    
    // 查询全部
    showAllVideo(model) {
      return publicApi.showAllVideo(model)
    },
    // 条件查询：按照user id查询 所有状态的
    findVideoByUserId(model) {
      return publicApi.findVideoByUserId(model)
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
    showAllIssues(model) {
      return publicApi.showAllIssues(model)
    },
    // 条件查询：根据提出者用户id查询
    findIssuesByUserId(model) {
      return publicApi.findIssuesByUserId(model)
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
    showAllOutsidelink(model) {
      return publicApi.showAllOutsidelink(model)
    },
    // 修改
    updateOutsidelink(model) {
      return publicApi.updateOutsidelink(model)
    },


  /**
   * @Author: 殷鹏飞
   * @Date: 2020-03-11 17:11:14
   * @Description: 文件(video,image,audio等)上传服务器 相关接口
   */ 
  // 视频上传
  uploadVideo(model) {
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    return publicApi.uploadVideo(model, config)
  },
  // 图片上传
  uploadImg(model) {
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    return publicApi.uploadImg(model, config)
  }

  }
}