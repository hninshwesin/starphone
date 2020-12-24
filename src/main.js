import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';

// import qs from 'qs'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import MarqueeText from 'vue-marquee-text-component';
// import VueImageSlider from 'vue-image-slider';
// import { CarouselPlugin } from 'bootstrap-vue'
// import VueCarousel from 'vue-carousel';
// import VueCarousel from '@chenfengyuan/vue-carousel';
import {VueFlux} from 'vue-flux';
// import { ColorPickerPlugin } from '@syncfusion/ej2-vue-inputs';
// import { enableRipple } from '@syncfusion/ej2-base';

// enableRipple(true);
Vue.use(BootstrapVue, axios);
Vue.use(VueSweetalert2);
// Vue.use(VueImageSlider);
// Vue.use(CarouselPlugin)
// Vue.use(VueCarousel);
Vue.use(VueFlux);
Vue.component('marquee-text', MarqueeText)

Vue.config.productionTip = false
// Vue.prototype.qs = qs

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

// sM9SAESeiTXCKwd