<!--
 * @author: 殷鹏飞
 * @Date: 2019-12-26 09:44:34
 * @information: 搜索组件
-->
<template>
    <div id="base-search">
        <el-input   placeholder="搜索感兴趣的资源"
                    prefix-icon="el-icon-search"
                    clearable
                    size="medium"
                    v-model="searchValue">
        </el-input>
        <div class="btn-box">
            <el-button  type="primary"
                        @click="searchClick"
                        size="medium">搜索</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchValue: '', //输入框值
        }
    },
    methods: {
        /**
         * @author: 殷鹏飞
         * @Date: 2019-12-27 19:26:31
         * @information: 搜索点击
         */
        searchClick() {
            // console.log(this.searchValue);
        }
    }
}
</script>

<style lang="scss">
#base-search {
    display: flex;
    .el-input--prefix {
        line-height: 51px;
        input {
            width: 260px;
        }
    }
    .btn-box {
        margin-left: 5px;
        line-height: 50px;
    }
}
</style>