import PublicationReponseState from './PublicationReponseState';
import {
    PublicationReponses,
    PublicationReponse
} from './PublicationReponseDomaine';

export function modifierPublicationReponses(
    state: PublicationReponseState,
    publicationReponses: PublicationReponses
): void {
    state.publicationReponses = [...publicationReponses];
}

export function modifierPublicationReponse(
    state: PublicationReponseState,
    publication: PublicationReponse
): void {
    state.publicationReponses.splice(
        state.publicationReponses.map(pr => pr.id).indexOf(publication.id),
        1,
        publication
    );
}

export function ajouterPublicatonReponse(
    state: PublicationReponseState,
    publication: PublicationReponse
): void {
    state.publicationReponses.push(publication);
}

export function supprimerPublicationReponse(
    state: PublicationReponseState,
    id: string
): void {
    state.publicationReponses.splice(
        state.publicationReponses.map(pr => pr.id).indexOf(id),
        1
    );
}
