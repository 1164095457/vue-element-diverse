<template>
    <div>
        <div class="box">
            <ul>
                <li>
                    <div>
                        <a href="https://github.com/1164095457/ " target="_blank">
                        <div class="iconfont icon-github item"></div>
                        <div class="color-text">github</div>
                        </a>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="https://blog.csdn.net/weixin_45231907?spm=1001.2101.3001.5343" target="_blank" class="color-csdn">
                        <div class="iconfont icon-CN_csdnnet item"></div>
                        <div class="color-text">csdn</div>
                        </a>
                    </div>
                </li>
                <li @click="youxiang">
                    <div>
                        <a href="javascript:;"  class="color-you">
                        <div class="iconfont icon-youxiang item"></div>
                        <div class="color-text">邮箱</div>
                        </a>
                    </div>
                </li>
                <li @click="qq">
                    <div>
                        <a href="javascript:;" class="color-qq">
                        <div class="iconfont icon-QQ item"></div>
                        <div class="color-text">QQ</div>
                        </a>
                    </div>
                </li>
                <li @click="wx">
                    <div>
                        <a href="javascript:;"  class="color-wx">
                        <div class="iconfont icon-weixin item"></div>
                        <div class="color-text">微信</div>
                        </a>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="el-icon-loading item"></div>
                        <div class="color-text">开发中</div>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script>
import '@/styles/iconfont.less'
export default {
    methods:{
        youxiang(){
            this.$message({
            showClose: true,
            message: '邮箱：1164095457@qq.com',
            type: 'success',
            duration:10000
            });
        },
        qq(){
            this.$message({
            showClose: true,
            message: 'QQ：1164095457',
            type: 'success',
            duration:10000
            });
        },
        wx(){
            this.$message({
            showClose: true,
            message: '微信：a13267705218',
            type: 'success',
            duration:10000
            });
        },
    }
}
</script>
<style lang="less" scoped>
.box ul{
    display: flex;
    flex-wrap: wrap;
        li{
        width: 28%;
        height: 100px;
        margin: 0 10px;
        margin-bottom: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ebe2e252;
        box-shadow:0px 0px 15px #ccc;
        cursor:pointer;
        &:hover .item{
            font-size: 28px;
            transition: all .3s;
        }
            .item{
                display: flex;
                justify-content: center;
                font-size: 25px;
                margin-bottom: 5px;
                
            }
        }
}
.color-text{
    color: black !important;
}
.color-csdn{
    color: red;
}
.color-you{
    color: #FF9800;
}
.color-qq{
    color: #2196F3;
}
.color-wx{
    color: seagreen;
}
</style>