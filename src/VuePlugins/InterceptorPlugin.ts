import { HttpService } from '@ulaval/modul-components/dist/utils/http/http';
import { PluginObject, VueConstructor } from 'vue';

const InterceptorPlugin: PluginObject<any> = {
    install(v: VueConstructor): void {
        (v.prototype.$http as HttpService).instance.interceptors.response.use(
            res => res.data
        );
    }
};

export default InterceptorPlugin;
