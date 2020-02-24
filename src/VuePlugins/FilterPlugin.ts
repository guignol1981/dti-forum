import { PluginObject } from 'vue/types/umd';
import Vue from 'vue';

const FilterPlugin: PluginObject<void> = {
    install: (): void => {
        Vue.filter(
            'truncate',
            (
                value: string,
                to: number = 10,
                ellipsis: string = '...'
            ): string => {
                if (value.length <= to) {
                    return value;
                }
                return value.slice(0, to) + ellipsis;
            }
        );

        Vue.filter(
            'translate',
            (value: string, params: any, nb: number = 1) => {
                return Vue.prototype.$i18n.translate(value, params, nb);
            }
        );

        Vue.filter('capitalize', (value: string) => value.toUpperCase());
    }
};

export default FilterPlugin;
