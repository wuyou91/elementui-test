<template>
  <div class="wrap">
    <home-header @Collapse="trsCollapse"></home-header>
    <home-sidebar :collapse="isCollapse"></home-sidebar>
    <div class="content" :class="{'content-collapse':isCollapse}"><router-view></router-view></div>
  </div>
</template>

<script>
import HomeHeader from './common/Header'
import HomeSidebar from './common/Sidebar'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSidebar
  },
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    trsCollapse (data) {
      this.isCollapse = data
    }
  }
}
</script>

<style scoped>
.content{
   position: absolute;
   top: 60px;
   left: 200px;
   right: 0;
   bottom: 0;
   overflow-y: scroll;
   padding: 40px;
   background-color: #f3f5f7;
   transition: left .3s ease-in-out;
}
.content-collapse{
  left:65px;
}
</style>
