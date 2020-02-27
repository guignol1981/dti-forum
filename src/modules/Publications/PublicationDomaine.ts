import { User } from '../User/UserDomaine';

export interface Publication {
    _id?: string;
    titre: string;
    corps: string;
    author?: User;
    upvotes?: string[];
    downvotes?: string[];
}

export type Publications = Publication[];
