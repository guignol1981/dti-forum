import PublicationState from './PublicationState';
import { Publications, Publication } from './PublicationDomaine';

export function modifierPublications(
    state: PublicationState,
    publications: Publications
): void {
    state.publications = [...publications];
}

export function modifierPublication(
    state: PublicationState,
    publication: Publication
): void {
    state.publications.splice(
        state.publications.map(p => p.id).indexOf(publication.id),
        1,
        publication
    );
}

export function supprimerPublication(
    state: PublicationState,
    id: string
): void {
    state.publications.splice(state.publications.map(p => p.id).indexOf(id), 1);
}

export function modifierPublicationConsultation(
    state: PublicationState,
    publication: Publication
): void {
    state.publicationConsultation = publication;
}
