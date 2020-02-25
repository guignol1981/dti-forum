import Vue from 'vue';
import Vuex, { Store, ActionContext } from 'vuex';
import PublicationModuleFactory from '@/modules/Publications/PublicationModule';
import PublicationReponseModuleFactory from '@/modules/PublicationReponse/PublicationReponseModule';

Vue.use(Vuex);

export class AppState {}

const appState = new AppState();

export function StoreFactory(): Store<AppState> {
    return new Vuex.Store({
        state: appState,
        modules: {
            publication: PublicationModuleFactory(appState),
            publicationReponse: PublicationReponseModuleFactory(appState)
        }
    });
}
