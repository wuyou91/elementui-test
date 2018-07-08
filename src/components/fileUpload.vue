<template>
  <div class="file-upload">
    <el-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    :file-list="fileList2"
    list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'fileUpload',
  data () {
    return {
      fileList2: [
        {
          name: 'pic1.jpeg',
          url: 'http://pas3zgdl2.bkt.clouddn.com/e006.jpg'
        },
        {
          name: 'pic2.jpeg',
          url: 'http://pas3zgdl2.bkt.clouddn.com/mb004.jpg'
        },
        {
          name: 'pic3.jpeg',
          url: 'http://pas3zgdl2.bkt.clouddn.com/mb005.jpg'
        },
        {
          name: 'pic4.jpeg',
          url: 'http://pas3zgdl2.bkt.clouddn.com/mb012.jpg'
        }
      ]
    }
  },
}
</script>

<style scoped>
.file-upload{
  padding: 20px;
  border-radius: 4px;
  background-color: #fff;
}
</style>
