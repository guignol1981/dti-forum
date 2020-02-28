import PublicationReponseModuleFactory from '@/modules/PublicationReponse/PublicationReponseModule';
import PublicationModuleFactory from '@/modules/Publications/PublicationModule';
import UserModuleFactory from '@/modules/User/UserModule';
import Vue from 'vue';
import Vuex, { Store, ActionContext } from 'vuex';

Vue.use(Vuex);

export class AppState {
    erreur: string = '';
}

const appState = new AppState();

export function StoreFactory(): Store<AppState> {
    return new Vuex.Store<AppState>({
        state: appState,
        getters: {
            erreur: (state: AppState) => state.erreur
        },
        mutations: {
            erreur: (state: AppState, erreur: string) => (state.erreur = erreur)
        },
        actions: {
            modifierErreur: (
                context: ActionContext<AppState, AppState>,
                erreur: string
            ) => {
                context.commit('erreur', erreur);
            }
        },
        modules: {
            publication: PublicationModuleFactory(appState),
            publicationReponse: PublicationReponseModuleFactory(appState),
            user: UserModuleFactory(appState)
        }
    });
}
