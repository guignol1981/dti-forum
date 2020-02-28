import { HttpService } from '@ulaval/modul-components/dist/utils/http/http';
import { PluginObject, VueConstructor, PluginFunction } from 'vue';
import { Store } from 'vuex';
import { AppState } from '@/store';

const InterceptorPlugin: PluginObject<{ store: Store<AppState> }> = {
    install: (
        v: VueConstructor,
        options?: { store: Store<AppState> }
    ): void => {
        (v.prototype.$http as HttpService).instance.interceptors.response.use(
            res => {
                return Promise.resolve(res.data);
            },
            res => {
                options!.store.dispatch(
                    'modifierErreur',
                    res.response.statusText
                );

                return Promise.reject(res);
            }
        );
    }
};

export default InterceptorPlugin;
