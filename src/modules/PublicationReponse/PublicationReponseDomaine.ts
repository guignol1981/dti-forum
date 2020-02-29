import { User } from '../User/UserDomaine';

export interface PublicationReponse {
    id?: string;
    auteur?: User;
    publicationId?: string;
    corps: string;
    upvotes?: string[];
    downvotes?: string[];
    best?: boolean;
}

export type PublicationReponses = PublicationReponse[];
