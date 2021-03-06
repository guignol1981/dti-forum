import { Publication, Publications } from './PublicationDomaine';
import PublicationState from './PublicationState';

export function modifierPublications(
    state: PublicationState,
    publications: Publications
): void {
    state.publications = [...publications.sort(
        (a, b) => a.upvotes!.length < b.upvotes!.length ? 1 : a.upvotes!.length > b.upvotes!.length ? -1 : 0
    )];
}

export function modifierPublication(
    state: PublicationState,
    publication: Publication
): void {
    state.publications.splice(
        state.publications.map(p => p._id).indexOf(publication._id),
        1,
        publication
    );
}

export function ajouterPublication(
    state: PublicationState,
    publication: Publication
): void {
    state.publications.push(publication);
}

export function supprimerPublication(
    state: PublicationState,
    id: string
): void {
    state.publications.splice(
        state.publications.map(p => p._id).indexOf(id),
        1
    );
}

export function modifierPublicationConsultation(
    state: PublicationState,
    publication: Publication
): void {
    state.publicationConsultation = publication;
}
