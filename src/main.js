import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// import qs from 'qs'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import MarqueeText from 'vue-marquee-text-component'
// import { ColorPickerPlugin } from '@syncfusion/ej2-vue-inputs';
// import { enableRipple } from '@syncfusion/ej2-base';

// enableRipple(true);
Vue.use(BootstrapVue, axios);
Vue.component('marquee-text', MarqueeText)

Vue.config.productionTip = false
// Vue.prototype.qs = qs

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

// sM9SAESeiTXCKwd