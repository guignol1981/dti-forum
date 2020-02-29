import { User } from '../User/UserDomaine';
import { Votable } from '../Publications/PublicationDomaine';

export interface PublicationReponse extends Votable {
    _id?: string;
    auteur?: User;
    publicationId?: string;
    corps: string;
    best?: boolean;
}

export type PublicationReponses = PublicationReponse[];
