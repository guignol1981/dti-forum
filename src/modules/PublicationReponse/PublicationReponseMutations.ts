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

export function ajouterPublicationReponse(
    state: PublicationReponseState,
    publicationReponse: PublicationReponse
): void {
    state.publicationReponses.push(publicationReponse);
}
