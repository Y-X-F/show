<template>
  <div>
    <el-button type="infor" @click="loginout">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    loginout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
