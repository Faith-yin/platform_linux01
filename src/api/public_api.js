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
    showAllInformation() {
      return axios.get(`/informaion/showAllInformation`)
    },
    // 条件查询：按照管理员id查询
    findInformationByAdminId(model) {
      return axios.post(`/informaion/findInformationByAdminId`,model)
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


  /**
   * @Author: 殷鹏飞
   * @Date: 2020-03-08 09:54:31
   * @Description: video 操作接口
   */    
  // 查询全部
  showAllVideo() {
    return axios.get(`/video/showAllVideo`)
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
  // issuesComment 查询全部
  showAllIssuesComment() {
    return axios.get(`/issuesComment/showAllIssuesComment`)
  },
  // issuesComment 条件查询：根据归属问题issueId查询
  findIssuesCommentByIssuesId(model) {
    return axios.post(`/issuesComment/findIssuesCommentByIssuesId`,model)
  },
  // issuesComment 添加
  addIssuesComment(model) {
    return axios.post(`/issuesComment/addIssuesComment`)
  },


  /**
   * @Author: 殷鹏飞
   * @Date: 2020-03-08 10:02:33
   * @Description: outsidelink 操作接口
   */  
  showAllOutsidelink() {
    return axios.get(`/outsidelink/showAllOutsidelink`)
  },





}
export default publicApi