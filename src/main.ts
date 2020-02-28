import { FrenchPlugin, ModulComponentPlugin } from '@ulaval/modul-components';
import '@ulaval/modul-components/dist/modul.min.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { StoreFactory } from './store';
import FilterPlugin from './VuePlugins/FilterPlugin';
import FrPlugin from './VuePlugins/FrPlugin';
import InterceptorPlugin from './VuePlugins/InterceptorPlugin';

Vue.use(ModulComponentPlugin);
Vue.use(FrenchPlugin);
Vue.use(FrPlugin);
Vue.use(FilterPlugin);

const store = StoreFactory();
Vue.use(InterceptorPlugin, { store });

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
