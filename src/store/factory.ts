import PublicationReponseModuleFactory from '@/modules/PublicationReponse/PublicationReponseModule';
import PublicationModuleFactory from '@/modules/Publications/PublicationModule';
import UserModuleFactory from '@/modules/User/UserModule';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

export class AppState {}

const appState = new AppState();

export function StoreFactory(): Store<AppState> {
    return new Vuex.Store({
        state: appState,
        modules: {
            publication: PublicationModuleFactory(appState),
            publicationReponse: PublicationReponseModuleFactory(appState),
            user: UserModuleFactory(appState)
        }
    });
}
