import Vue from 'vue'
import * as echarts from 'echarts'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
new Vue({
  router,
  store,
  data:{
    foo:3333,
  },
  render: h => h(App)
}).$mount('#app')
