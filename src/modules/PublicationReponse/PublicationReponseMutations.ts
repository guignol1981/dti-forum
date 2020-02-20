import PublicationReponseState from './PublicationReponseState';
import { PublicationReponses } from './PublicationReponseDomaine';

export function modifierPublicationReponses(
    state: PublicationReponseState,
    publicationReponses: PublicationReponses
): void {
    state.publicationReponses = [...publicationReponses];
}
