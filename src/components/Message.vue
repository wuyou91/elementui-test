<template>
  <div class="message">
    <el-tabs v-model="activeName">
      <el-tab-pane :label="`未读消息(${unread.length})`" name="first">
        <div class="no-message" v-show="unread.length===0">此处没有消息</div>
        <ul class="list">
          <li v-for="(item, index) in unread" class="list-item" :key="index">
            <p>{{item}}</p><el-button size="small" @click="hasRead(index)">标为已读</el-button>
          </li>
        </ul>
        <el-button size="small" type="primary" @click="hasReadAll">全部标为已读</el-button>
      </el-tab-pane>
      <el-tab-pane :label="`已读消息(${read.length})`" name="second">
        <div class="no-message" v-show="read.length===0">此处没有消息</div>
        <ul class="list">
          <li v-for="(item, index) in read" class="list-item" :key="index">
            <p>{{item}}</p><el-button type="danger" size="small" @click="delate(index)">删除</el-button>
          </li>
        </ul>
        <el-button type="danger" size="small" @click="delateAll">全部删除</el-button>
      </el-tab-pane>
      <el-tab-pane :label="`删除记录(${history.length})`" name="third">
        <div class="no-message" v-show="history.length===0">此处没有消息</div>
        <ul class="list">
          <li v-for="(item, index) in history" class="list-item" :key="index">
            <p>{{item}}</p><el-button type="success" size="small" @click="restore(index)">还原</el-button>
          </li>
        </ul>
        <el-button type="success" size="small" @click="restoreAll">全部还原</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
      activeName: 'first',
      unread: [
        'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。',
        'Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统',
        'Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。'
      ],
      read: [
        'React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面。',
        '以声明式编写UI，可以让你的代码更加可靠，且方便调试。',
        'React 组件使用一个名为 render() 的方法， 接收数据作为输入，输出页面中对应展示的内容。',
        'JSX 用来声明 React 当中的元素。乍看起来可能比较像是模版语言，但事实上它完全是在 JavaScript 内部实现的。'
      ],
      history: [
        'JavaScript 是 Web 的编程语言。',
        '所有现代的 HTML 页面都使用 JavaScript。',
        'avaScript 是一个脚本语言。它是一个轻量级，但功能强大的编程语言。',
        '通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。',
        'JavaScript 使用关键字 function 定义函数。函数可以通过声明定义，也可以是一个表达式。',
        'JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...'
      ]
    }
  },
  methods: {
    // 标为已读
    hasRead (index) {
      let item = this.unread.splice(index, 1)
      this.read = item.concat(this.read)
    },
    // 全部标为已读
    hasReadAll () {
      for (let item of this.unread) {
        this.read.push(item)
      }
      this.unread = []
    },
    // 删除消息
    delate (index) {
      let item = this.read.splice(index, 1)
      this.history = item.concat(this.history)
    },
    // 删除全部消息
    delateAll () {
      for (let item of this.read) {
        this.history.push(item)
      }
      this.read = []
    },
    // 还原消息
    restore (index) {
      let item = this.history.splice(index, 1)
      this.read = item.concat(this.read)
    },
    // 还原全部消息
    restoreAll () {
      for (let item of this.history) {
        this.read.push(item)
      }
      this.history = []
    }
  }
}
</script>

<style scoped>
.message{
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
}
.no-message{
  width: 100%;
  text-align: center;
  color: #ccc;
}
.list{
  margin-bottom: 20px;
}
.list>.list-item{
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  border-bottom: 1px solid #ebeef5;
  transition: background-color 1s ease;
}
.list>.list-item:hover{
  background-color: #eee;
}
.list>.list-item>p{
  display: block;
  margin-right: 10px;
  font-size: 14px;
  color: #409EFF;
  line-height: 32px;
  cursor: pointer;
}
</style>
