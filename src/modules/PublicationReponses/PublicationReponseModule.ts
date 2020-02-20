import { Module, ActionContext } from 'vuex';
import { AppState } from '@/store/factory';
import PublicationReponseState from './PublicationReponseState';
import {
    PublicationReponses,
    PublicationReponse
} from './PublicationReponseDomaine';
import {
    modifierPublicationReponses,
    supprimerPublicationReponse,
    ajouterPublicatonReponse
} from './PublicationReponseMutations';
import {
    GETTER_PUBLICATION_REPONSES,
    MUTATION_PUBLICATION_REPONSES,
    ACTION_CHERCHER_PUBLICATION_REPONSES,
    MUTATION_AJOUTER_PUBLICATION_REPONSE,
    MUTATION_SUPPRIMER_PUBLICATION_REPONSE
} from './PublicationReponseModuleDefinitions';

export function PublicationReponseModuleFactory(
    appState: AppState
): Module<PublicationReponseState, AppState> {
    return {
        namespaced: true,
        state: new PublicationReponseState(appState),
        getters: {
            [GETTER_PUBLICATION_REPONSES]: (state: PublicationReponseState) =>
                state.publicationReponses
        },
        mutations: {
            [MUTATION_PUBLICATION_REPONSES]: (
                state: PublicationReponseState,
                publicationReponses: PublicationReponses
            ): void => modifierPublicationReponses(state, publicationReponses),
            [MUTATION_PUBLICATION_REPONSES]: (
                state: PublicationReponseState,
                publicationReponses: PublicationReponses
            ): void => modifierPublicationReponses(state, publicationReponses),
            [MUTATION_AJOUTER_PUBLICATION_REPONSE]: (
                state: PublicationReponseState,
                publicationReponse: PublicationReponse
            ): void => ajouterPublicatonReponse(state, publicationReponse),
            [MUTATION_SUPPRIMER_PUBLICATION_REPONSE]: (
                state: PublicationReponseState,
                id: string
            ): void => supprimerPublicationReponse(state, id)
        },
        actions: {
            [ACTION_CHERCHER_PUBLICATION_REPONSES]: (
                context: ActionContext<PublicationReponseState, AppState>
            ): void => {
                context.state.restService
                    .rechercher()
                    .then((publicationReponses: PublicationReponses) =>
                        context.commit(
                            MUTATION_PUBLICATION_REPONSES,
                            publicationReponses
                        )
                    );
            }
        }
    };
}

export default PublicationReponseModuleFactory;
