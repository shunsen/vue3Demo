<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="240px">
          <sidemenu></sidemenu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import sidemenu from './sidemenu.vue'

export default {
  components: { sidemenu },
}
</script>

<style lang="scss">
.common-layout {
  height: 100%;
}
.el-aside {
  // background-color: blue;
  border: 1px solid black;
}
.el-header {
  // background-color: orange;
  border: 1px solid black;
}
.el-footer {
  // background-color: green;
  border: 1px solid black;
}
.el-main {
  // background-color: silver;
  border: 1px solid black;
  min-height: 700px;
}
</style>
