/* eslint-disable @typescript-eslint/no-var-requires */
import ComponentsFrenchPlugin from '@ulaval/modul-components/dist/lang/fr';
import { FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import { PluginObject, VueConstructor } from 'vue';

const FrenchPlugin: PluginObject<any> = {
    install(v: VueConstructor): void {
        v.prototype.$i18n.addMessages(
            FRENCH,
            require('@/components/publication/Publication.lang.fr.json')
        );
    }
};

export default FrenchPlugin;
