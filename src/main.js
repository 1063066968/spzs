import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 引入mpType，为了与后面要讲的小程序页面组件所区分开来，小程序页面组件和App.vue组件的写法和引入方式是一致的，为了区分两者，需要设置mpType值
App.mpType = 'app'

const app = new Vue(App)

// 引入这个App.vue组件后，会用它作为参数来创建一个Vue的实例，并调用$mount()方法加载
app.$mount()

export default {
    config: {
        pages: ['^pages/index/main'],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: '商品助手',
            navigationBarTextStyle: 'black'
        }
    }
}