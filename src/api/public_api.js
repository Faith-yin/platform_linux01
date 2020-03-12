/*
 * @author: 殷鹏飞
 * @Date: 2019-12-26 13:58:53
 * @information: api层
 */
import axios from 'axios'

const publicApi = {
  /**
   * @Author: 殷鹏飞
   * @Date: 2020-03-08 09:39:17
   * @Description: user 操作接口
   */    
  // 查询全部
  showAllUser() {
    return axios.get(`/user/showAllUser`)
  },
  // 条件查询：根据用户名称 和 用户密码查询
  findUserByNameAndPassword(model) {
    return axios.post(`/user/findUserByNameAndPassword`,model)
  },
  // 添加
  addUser(model) {
    return axios.post(`/user/addUser`,model)
  },
  // 修改
  updateUserById(model) {
    return axios.put(`/user/updateUserById`,model)
  },


  /**
   * @Author: 殷鹏飞
   * @Date: 2020-03-08 09:45:51
   * @Description: information公告 操作接口
   */
    // 查询全部
    showAllInformation(model) {
      return axios.post(`/information/showAllInformation`,model)
    },
    // 修改
    updateInformation(model) {
      return axios.put(`/information/updateInformation`,model)
    },


  /**
   * @Author: 殷鹏飞
   * @Date: 2020-03-08 09:51:08
   * @Description: article文章 操作接口
   */    
    // 查询全部
    showAllArticle() {
      return axios.get(`/article/showAllArticle`)
    },
    // 添加
    addArticle(model) {
      return axios.post(`/article/addArticle`,model)
    },
    // 修改
    updateArticle(model) {
      return axios.put(`/article/updateArticle`,model)
    },


  /**
   * @Author: 殷鹏飞
   * @Date: 2020-03-08 09:54:31
   * @Description: video 操作接口
   */    
  // 查询全部
  showAllVideo() {
    return axios.get(`/video/showAllVideo`)
  },
  // 修改
  updateVideo(model) {
    return axios.put(`/video/updateVideo`,model)
  },
  // 添加
  addVideo(model) {
    return axios.post(`/video/addVideo`,model)
  },


  /**
   * @Author: 殷鹏飞
   * @Date: 2020-03-08 09:55:35
   * @Description: issues 操作接口
   */  
  // 查询全部
  showAllIssues() {
    return axios.get(`/issues/showAllIssues`)
  },
  // 添加
  addIssues(model) {
    return axios.post(`/issues/addIssues`,model)
  },
  // 修改
  updateIssues(model) {
    return axios.put(`/issues/updateIssues`,model)
  },
  // issuesComment 查询全部
  showAllIssuesComment() {
    return axios.get(`/issuesComment/showAllIssuesComment`)
  },
  // issuesComment 条件查询：根据归属问题issueId查询
  findIssuesCommentByIssuesId(model) {
    return axios.post(`/issuesComment/findIssuesCommentByIssuesId/${model}`)
  },
  // issuesComment 添加
  addIssuesComment(model) {
    return axios.post(`/issuesComment/addIssuesComment`,model)
  },


  /**
   * @Author: 殷鹏飞
   * @Date: 2020-03-08 10:02:33
   * @Description: outsidelink 操作接口
   */  
  // 查询全部
  showAllOutsidelink() {
    return axios.get(`/outsidelink/showAllOutsidelink`)
  },
  // 修改
  updateOutsidelink(model) {
    return axios.put(`/outsidelink/updateOutsidelink`,model)
  },


  /**
   * @Author: 殷鹏飞
   * @Date: 2020-03-11 17:11:14
   * @Description: 文件(video,image,audio等)上传服务器 相关接口
   */ 
  // 视频上传
  uploadVideo(model, config) {
    return axios.post(`/uploadFile/uploadVideo`, model, config)
  },
  // 图片上传 
  uploadImg(model, config) {
    return axios.post(`/uploadFile/uploadImg`, model, config)
  },






}
export default publicApi