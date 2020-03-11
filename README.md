# show

## 创建项目
### 登录
#### 修改配置
改为空白项目
##### App根组件
APP.vue
```
<template>
  <div id="app">
    app
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
```
##### 删除不必要的组件
```
|--components
   |--HelloWorld.vue
|--views
   |--About.vue
   |--Home.vue
```
##### 创建登录组件
```
<template>
  <div>
    login组件
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
</style>

```
##### 修改路由
```
import Login from '../components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  }
]
```
##### 添加占位符
App.vue
```
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
</style>
```
#### 编写内容
##### 添加开发中依赖
添加less-loader依赖
添加less依赖
##### 添加插件
添加element插件 分组
##### 添加字体图标
font.js
##### 添加请求插件
axios
##### 设置导航路由守卫
# git
## 操作
复杂 略
```
初始化仓库
git init

查看状态
git status

添加至暂存
git add 

添加描述
git commit -m 'xxx'
```

## IDEA操作
### 添加账户
### 添加仓库
### 操作
#### IDEA上创建好maven项目
#### 添加.git
```
vcs>>import into Version Control >>Create Git Repository
选择当前项目
```
#### 添加
```
选中项目 右键 git >> add
```
#### 提交到本地仓库
```
选中项目 右键 git >> Commit Directory
```