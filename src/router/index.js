import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/login', name: 'Login', component: Login },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../components/Home.vue')
  }
]

const router = new VueRouter({
  routes
})
/* 挂载路由导航 */
router.beforeEach((to, from, next) => {
  /* to 将要访问的路径 from 从哪个路径跳转 next 函数放行 */
  if (to.path === '/login') return next()
  /* 获取token */
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
