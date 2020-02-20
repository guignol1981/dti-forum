import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import PublicationModuleFactory from '@/components/publication/PublicationModule';
import PublicationReponseModuleFactory from '@/modules/publication-reponse/PublicationReponseModule';

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
