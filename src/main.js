// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import scrollDown from './components/scrollDown.vue'
import threedView from './components/threedView.vue'
import footerPage from './components/footerPage'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(scrollDown);
Vue.use(threedView);
Vue.use(footerPage)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App, threedView, footerPage },
  template: '<App/>'
})
