import PublicationReponseState from './PublicationReponseState';
import {
    PublicationReponses,
    PublicationReponse
} from './PublicationReponseDomaine';

export function modifierPublicationReponses(
    state: PublicationReponseState,
    publicationReponses: PublicationReponses
): void {
    state.publicationReponses = [
        ...publicationReponses.sort(
            (a, b) => a.upvotes!.length < b.upvotes!.length ? 1 : a.upvotes!.length > b.upvotes!.length ? -1 : 0
        )
    ];
}

export function ajouterPublicationReponse(
    state: PublicationReponseState,
    publicationReponse: PublicationReponse
): void {
    state.publicationReponses.push(publicationReponse);
}

export function modifierPublicationReponse(state: PublicationReponseState, publicationReponse: PublicationReponse): void {
    state.publicationReponses.splice(
        state.publicationReponses.map(p => p._id).indexOf(publicationReponse._id),
        1,
        publicationReponse
    );
}
