import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'

//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})

import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'
app.component('SvgIcon', SvgIcon)

import gloablComponent from '@/components/index'
app.use(gloablComponent)
import '@/styles/index.scss'

app.mount('#app')
