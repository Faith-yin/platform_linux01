/*
 * @author: 殷鹏飞
 * @Date: 2019-12-26 14:27:52
 * @information: 公共方法
 */
import { Message, Loading  } from 'element-ui'
import moment from 'moment'

export default {
    methods: {
        /**
         * @author: 殷鹏飞
         * @Date: 2019-12-26 14:17:53
         * @information: 请求方法
         */
        methodQuery(model) {
            // loading名称，消息提示，promise或方法名称，方法参数，回调
            let { message, pMethod, params, callBack } = model
            let options = {
              spinner: 'el-icon-loading',
            }
            // 打开loading
            Loading.service(options);
            // 判断传进来的是 promise 还是  方法名称
            let method = typeof pMethod == 'string' ? this[pMethod](params) : pMethod
            // 操作promise
            method.then(async res => {
                message && Message.success(message || '操作成功')
                // 回调方法
                callBack && await this[callBack](res)
            }).finally(_ => {
                // 关闭loading
                let loadingInstance = Loading.service(options);
                this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                    loadingInstance.close();
                });
            })
        },
        /**
         * @author: 殷鹏飞
         * @Date: 2019-12-26 14:17:53
         * @information: 路由跳转
         */
        routeGo(model) {
            this.$router.push({
                ...model
            })
        },
        /**
         * @author: 殷鹏飞
         * @Date: 2019-12-26 14:17:53
         * @information: 表单检验
         */
        formRequired(model) {
            let { arr, msg } = model
            let requiredArr = ['string', 'array', 'object']
            if(!arr || !requiredArr.includes(typeof arr)) return;
            let obj
            if(typeof arr == 'object' && !Array.isArray(arr)) {
                // 是对象
                obj = Object.values(arr)
            }else {
                // 字符串或数组
                obj = typeof arr == 'string' ? [arr] : arr
            }
            let mark = obj.every(el => {
              if(typeof(el) === 'string') return el
              if(typeof(el) === 'number') return true
              if(Array.isArray(el)) return el.length
              if(typeof(el) === 'object') return this.formRequired({arr: el})
              return false
            })
            !mark && Message.warning(msg ? msg : '请完善必填信息')
            return mark
        },
        /**
         * @author: 殷鹏飞
         * @Date: 2019-12-27 08:47:26
         * @information: 获取当前年月日
         */
        getCurrentDate() {
            // 获取当前日期
            let date = new Date()
            // 获取当前月份
            let nowMonth = date.getMonth() + 1
            // 获取当前是几号
            let strDate = date.getDate()
            // 对月份进行处理，1-9月在前面添加一个“0”
            if (nowMonth >= 1 && nowMonth <= 9) {
                nowMonth = `0${nowMonth}`
            }
            // 对月份进行处理，1-9号在前面添加一个“0”
            if (strDate >= 0 && strDate <= 9) {
                strDate = `0${strDate}`
            }
            this.timeNow = `${date.getFullYear()}-${nowMonth}-${strDate}`
        },
        /**
         * @Author: 殷鹏飞
         * @Date: 2020-03-09 10:26:16
         * @Description: 格式化时间
         */
        timeFormat(val) {
          return moment(val).format('YYYY-MM-DD HH:mm:ss')
        },
        /**
         * @Author: 殷鹏飞
         * @Date: 2020-03-09 17:29:02
         * @Description: 检测某值是否全为空格
         */
        checkBlankSpace(str){
          while(str.lastIndexOf(" ") >= 0){
            str = str.replace(" ","");
          }
          if(str.length == 0) return false
          return true
        }
    }
}