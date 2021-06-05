import Vue from 'vue';
import App from './App.vue';
import Test from './components/Test';
import Test2 from './components/Test2';

Vue.config.productionTip = false;
Vue.component('Test', Test);
Vue.component('Test2', Test2);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
