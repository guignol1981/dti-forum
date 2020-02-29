import { User } from '../User/UserDomaine';

export interface Votable {
    upvotes?: string[];
    downvotes?: string[];
}

export interface Publication extends Votable {
    _id?: string;
    titre: string;
    corps: string;
    auteur?: User;
}

export type Publications = Publication[];
