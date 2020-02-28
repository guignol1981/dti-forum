import { AppState } from '@/store/factory';
import { ActionContext, Module } from 'vuex';
import { Publication, Publications } from './PublicationDomaine';
import {
    ACTION_AJOUTER_PUBLICATION,
    ACTION_CHERCHER_PUBLICATIONS,
    ACTION_CONSULTER_PUBLICATION,
    ACTION_MODIFIER_PUBLICATION,
    ACTION_MODIFIER_PUBLICATION_CONSULTATION,
    ACTION_SUPPRIMER_PUBLICATION,
    GETTER_PUBLICATIONS,
    GETTER_PUBLICATION_CONSULTATION,
    MUTATION_AJOUTER_PUBLICATION,
    MUTATION_MODIFIER_PUBLICATION,
    MUTATION_PUBLICATIONS,
    MUTATION_PUBLICATION_CONSULTATION,
    MUTATION_SUPPRIMER_PUBLICATION
} from './PublicationModuleDefinition';
import {
    ajouterPublication,
    modifierPublication,
    modifierPublicationConsultation,
    modifierPublications,
    supprimerPublication
} from './PublicationMutations';
import PublicationState from './PublicationState';

export function PublicationModuleFactory(
    appState: AppState
): Module<PublicationState, AppState> {
    return {
        namespaced: true,
        state: new PublicationState(appState),
        getters: {
            [GETTER_PUBLICATIONS]: (state: PublicationState) =>
                state.publications,
            [GETTER_PUBLICATION_CONSULTATION]: (state: PublicationState) =>
                state.publicationConsultation
        },
        mutations: {
            [MUTATION_PUBLICATIONS]: (
                state: PublicationState,
                publications: Publications
            ): void => modifierPublications(state, publications),
            [MUTATION_MODIFIER_PUBLICATION]: (
                state: PublicationState,
                publication: Publication
            ): void => modifierPublication(state, publication),
            [MUTATION_AJOUTER_PUBLICATION]: (
                state: PublicationState,
                publication: Publication
            ) => ajouterPublication(state, publication),
            [MUTATION_SUPPRIMER_PUBLICATION]: (
                state: PublicationState,
                id: string
            ): void => supprimerPublication(state, id),
            [MUTATION_PUBLICATION_CONSULTATION]: (
                state: PublicationState,
                publication: Publication
            ): void => modifierPublicationConsultation(state, publication)
        },
        actions: {
            [ACTION_CHERCHER_PUBLICATIONS]: (
                context: ActionContext<PublicationState, AppState>
            ): void => {
                context.state.restService
                    .rechercher()
                    .then((publicatons: Publications) =>
                        context.commit(MUTATION_PUBLICATIONS, publicatons)
                    );
            },
            [ACTION_CONSULTER_PUBLICATION]: (
                context: ActionContext<PublicationState, AppState>,
                id: string
            ): void => {
                context.state.restService
                    .rechercherParId(id)
                    .then((publication: Publication) =>
                        context.commit(
                            MUTATION_PUBLICATION_CONSULTATION,
                            publication
                        )
                    );
            },
            [ACTION_MODIFIER_PUBLICATION]: (
                context: ActionContext<PublicationState, AppState>,
                publication: Publication
            ): void => {
                context.state.restService
                    .modifier(publication)
                    .then((publication: Publication) =>
                        context.commit(
                            MUTATION_MODIFIER_PUBLICATION,
                            publication
                        )
                    );
            },
            [ACTION_MODIFIER_PUBLICATION_CONSULTATION]: (
                context: ActionContext<PublicationState, AppState>,
                publication: Publication
            ): void => {
                context.state.restService
                    .modifier(publication)
                    .then((publication: Publication) =>
                        context.commit(
                            MUTATION_PUBLICATION_CONSULTATION,
                            publication
                        )
                    );
            },
            [ACTION_AJOUTER_PUBLICATION]: (
                context: ActionContext<PublicationState, AppState>,
                publication: Publication
            ): void => {
                context.state.restService
                    .creer(publication)
                    .then((publication: Publication) =>
                        context.commit(
                            MUTATION_AJOUTER_PUBLICATION,
                            publication
                        )
                    );
            },
            [ACTION_SUPPRIMER_PUBLICATION]: (
                context: ActionContext<PublicationState, AppState>,
                id: string
            ): void => {
                context.state.restService
                    .supprimer(id)
                    .then(() =>
                        context.commit(MUTATION_SUPPRIMER_PUBLICATION, id)
                    );
            }
        }
    };
}

export default PublicationModuleFactory;
