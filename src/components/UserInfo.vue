<template>
  <div class="userinfo">
    <div class="top-info">
      <span>个人信息</span>
      <el-button type="primary" round icon="el-icon-service" style="float: right;" @click=contactService>联系客服</el-button>
    </div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="card-gap">
          <div class="user-info">
            <img src="http://p5l3m2dap.bkt.clouddn.com/logo.jpg">
            <div class="user-info-name">{{name}}</div>
            <div>{{userType}}</div>
          </div>
          <div class="user-info-list">本地时间 ：<span>{{time}}</span></div>
          <div class="user-info-list">本地IP ：<span>{{localIP}}</span></div>
        </el-card>
        <el-card shadow="hover">
          <div class="set-circle">
            <el-progress type="circle" :percentage="Remainder" color="#8e71c7"></el-progress>
          </div>
          <div class="set-text">
            <i class="el-icon-document"></i> 套餐剩余
            <div>{{Remainder}}G</div>
            <el-button type="success" round @click="Recharge">立即充值</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row type="flex" :gutter="20" justify="space-between">
          <el-col :span="12">
            <el-card shadow="hover" class="card-gap">
              今日访客<span class="visitor-count" style="color:#409EFF">{{todaVisitor}}</span>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="hover" class="card-gap">
              历史访客<span class="visitor-count" style="color:#67C23A">{{allVisitor}}</span>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-card shadow="hover">
              <div class="record">
                <div class="record-header">
                  <span style="font-size: 18px;font-weight: 600;">日 志</span>
                  <div class="ctr-btn">
                    <i class="el-icon-edit" @click="addRecord"> 添加</i>
                    <i class="el-icon-printer" @click="delateAll"> 清空</i>
                  </div>
                </div>
                <ul class="list">
                  <li class="list-item" v-for="(item, index) in records" :key="index">
                    <p>{{item}}</p>
                    <i class="el-icon-delete" @click="delateRecord(index)"> 删除</i>
                  </li>
                </ul>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Userinfo',
  data () {
    return {
      name: localStorage.getItem('ms_username'),
      localIP: '127.0.0.1',
      Remainder: 58.48,
      todaVisitor: 1589,
      allVisitor: 26598,
      records: [
        '备忘录意指任何一种能够帮助记忆,简单说明主题与相关事件的图片、文字或语音资料。',
        '点击右上角添加一条日志。',
        '选中一条日志记录，然后点右上角删除键，即可删除',
        '点击清空，则删除全部记录。',
        '点击右上角全选框，可全选或反选。',
        '赶快来试一试吧！！'
      ],
      checkAll: false,
      checked: false
    }
  },
  computed: {
    userType () {
      return this.name === 'admin' ? '超级管理员' : '普通用户'
    },
    time () {
      let date = new Date()
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours()}:${date.getMinutes()}`
    }
  },
  methods: {
    // 添加日志记录
    addRecord () {
      this.$prompt('请输内容', '添加日志', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValidator: function (val) {
          let value = val.replace(/\s+/g, '')
          if (value) {
            return true
          } else {
            return '内容不能为空'
          }
        }
      }).then(({ value }) => {
        this.records.push(value)
        this.$message({
          type: 'success',
          message: '日志添加成功'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    // 删除日志记录
    delateRecord (index) {
      this.records.splice(index, 1)
    },
    // 清空日志记录
    delateAll () {
      this.records = []
    },
    contactService () {
      this.$message({
        message: '交钱了没？没交钱还想要客服？',
        type: 'warning'
      })
    },
    // 充值
    Recharge () {
      this.$prompt('请输入充值额度', '充值', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValidator: function (val) {
          let value = val.replace(/\s+/g, '')
          if (value > 0) {
            return true
          } else {
            return '请输入大于0的充值额度'
          }
        }
      }).then(({ value }) => {
        let num = this.Remainder + Number(value)
        this.Remainder = Math.floor(num * 100) / 100
        this.$message({
          type: 'success',
          message: '成功充值 ' + value + ' G'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    }
  }
}
</script>

<style scoped>
.top-info{
  font-size: 18px;
  color: #999;
  line-height: 40px;
  margin-bottom: 20px;
  overflow: hidden;
  padding: 5px 20px;
  border-radius: 4px;
  background-color: #fff;
}
.card-gap{
  margin-bottom: 20px;
}
.user-info{
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid #eee;
}
.user-info img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transition: transform .6s ease;
}
.user-info img:hover{
  transform: rotateY(180deg);
}
.user-info .user-info-name{
  margin-top: 10px;
  font-size: 24px;
  font-weight: 600;
  color: #333;
}
.user-info .user-info-name+div{
  font-size: 14px;
  color: #999;
}
.user-info-list{
  font-size: 14px;
  color: #666;
  margin: 8px 0;
}
.user-info-list>span{
  float: right;
}
.set-circle{
  margin: 0 30px 10px 0;
  float: left;
}
.set-text{
  color: #999;
  float: left;
}
.set-text>div{
  color: #333;
  margin: 10px 0;
  font-size: 30px;
  font-weight: 600;
}
.visitor-count{
  margin-left: 30px;
  font-size: 42px;
  font-weight: 600;
}
.record .record-header{
  overflow: hidden;
  padding: 0 10px 5px 5px;
  border-bottom: 1px solid #eee;

}
.record .record-header .ctr-btn{
  float: right;
  color: #409EFF;
}
.record .record-header .ctr-btn>i{
  margin-left: 10px;
  cursor: pointer;
  user-select:none;
}
.list li{
  position: relative;
  padding: 10px 70px 10px 5px;
  border-bottom: 1px solid #efefef;
  overflow: hidden;
}
.list li i{
  position: absolute;
  right: 10px;
  top: 12px;
  color: #409EFF;
  cursor: pointer;
}
</style>
