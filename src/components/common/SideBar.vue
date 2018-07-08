<template>
  <div class="sidebar">
    <el-menu
      :default-active="onRoutes"
      class="sidebar-el-menu"
      router
      :collapse="collapse"
      background-color="#423064"
      text-color="#cceeff"
      active-text-color="#0099e6">
      <el-menu-item index="/home/userinfo">
        <i class="el-icon-star-off"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
      <el-menu-item index="/home/message">
        <i class="el-icon-message"></i>
        <span slot="title">消息中心</span>
      </el-menu-item>
      <el-menu-item index="/home/chart">
        <i class="el-icon-date"></i>
        <span slot="title">数据图表</span>
      </el-menu-item>
        <el-menu-item index="/home/fileupload">
        <i class="el-icon-upload2"></i>
        <span slot="title">文件上传</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['collapse'],
  computed: {
    onRoutes () {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.sidebar{
  position: absolute;
  left: 0;
  top: 60px;
  bottom:0;
}
.sidebar-el-menu:not(.el-menu--collapse){
  width: 200px;
}
.sidebar > ul {
  height:100%;
}
</style>
