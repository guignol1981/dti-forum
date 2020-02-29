import { Module, ActionContext } from 'vuex';
import { AppState } from '@/store';
import PublicationReponseState from './PublicationReponseState';
import {
    PublicationReponses,
    PublicationReponse
} from './PublicationReponseDomaine';
import {
    modifierPublicationReponses,
    ajouterPublicationReponse,
    modifierPublicationReponse
} from './PublicationReponseMutations';
import {
    GETTER_PUBLICATION_REPONSES,
    MUTATION_PUBLICATION_REPONSES,
    ACTION_CHERCHER_PUBLICATION_REPONSES,
    ACTION_AJOUTER_PUBLICATION_REPONSE,
    MUTATION_AJOUTER_PUBLICATION_REPONSE,
    ACTION_MODIFIER_PUBLICATION_REPONSE,
    MUTATION_MODIFIER_PUBLICATION_REPONSE
} from './PublicationReponseModuleDefinitions';
import { PublicationReponseService } from './PublicationReponseService';
import { Publication } from '../Publications/PublicationDomaine';
import { MUTATION_AJOUTER_PUBLICATION } from '../Publications/PublicationModuleDefinition';

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
            [MUTATION_AJOUTER_PUBLICATION_REPONSE]: (
                state: PublicationReponseState,
                publicationReponse: PublicationReponse
            ) => ajouterPublicationReponse(state, publicationReponse),
            [MUTATION_MODIFIER_PUBLICATION_REPONSE]: (state: PublicationReponseState, publicationReponse: PublicationReponse) => modifierPublicationReponse(state, publicationReponse)
        },
        actions: {
            [ACTION_CHERCHER_PUBLICATION_REPONSES]: (
                context: ActionContext<PublicationReponseState, AppState>,
                publicationId: string
            ): void => {
                (context.state.restService as PublicationReponseService)
                    .rechercherParPublicationId(publicationId)
                    .then((publicationReponses: PublicationReponses) =>
                        context.commit(
                            MUTATION_PUBLICATION_REPONSES,
                            publicationReponses
                        )
                    );
            },
            [ACTION_AJOUTER_PUBLICATION_REPONSE]: (
                context: ActionContext<PublicationReponseState, AppState>,
                publicationReponse: PublicationReponse
            ): void => {
                context.state.restService
                    .creer(publicationReponse)
                    .then((publicationReponse: PublicationReponse) =>
                        context.commit(
                            MUTATION_AJOUTER_PUBLICATION_REPONSE,
                            publicationReponse
                        )
                    );
            },
            [ACTION_MODIFIER_PUBLICATION_REPONSE]: (
                context: ActionContext<PublicationReponseState, AppState>,
                publicationReponse: PublicationReponse
            ): void => {
                context.state.restService
                    .modifier(publicationReponse)
                    .then((publicationReponse: PublicationReponse) =>
                        context.commit(
                            MUTATION_MODIFIER_PUBLICATION_REPONSE,
                            publicationReponse)
                    );
            }
        }
    };
}

export default PublicationReponseModuleFactory;
