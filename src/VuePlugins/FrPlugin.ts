/* eslint-disable @typescript-eslint/no-var-requires */
import { FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import { PluginObject, VueConstructor } from 'vue';

const FrenchPlugin: PluginObject<void> = {
    install(v: VueConstructor): void {
        v.prototype.$i18n.addMessages(
            FRENCH,
            require('@/vues/langs/Publication.lang.fr.json')
        );
    }
};

export default FrenchPlugin;
