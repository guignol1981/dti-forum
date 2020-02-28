export interface PublicationReponse {
    id?: string;
    publicationId?: string;
    corps: string;
    upvotes?: string[];
    downvotes?: string[];
    best?: boolean;
}

export type PublicationReponses = PublicationReponse[];
