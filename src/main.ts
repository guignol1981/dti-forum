import { FrenchPlugin, ModulComponentPlugin } from '@ulaval/modul-components';
import '@ulaval/modul-components/dist/modul.min.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { StoreFactory } from './store/factory';
import FilterPlugin from './VuePlugins/FilterPlugin';
import FrPlugin from './VuePlugins/FrPlugin';

Vue.use(ModulComponentPlugin);
Vue.use(FrenchPlugin);
Vue.use(FrPlugin);
Vue.use(FilterPlugin);

Vue.config.productionTip = false;

new Vue({
    store: StoreFactory(),
    router,
    render: h => h(App)
}).$mount('#app');
