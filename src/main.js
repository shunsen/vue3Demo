import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 5. 创建并挂载根实例
const app = createApp(App)
// 绑定路由
app.use(router)
// 绑定组件库
app.use(ElementPlus)
// 将vue实例挂载到Dom结构
app.mount('#app')
