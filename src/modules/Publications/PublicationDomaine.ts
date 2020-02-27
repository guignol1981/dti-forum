import { User } from '../User/UserDomaine';

export interface Publication {
    _id?: string;
    titre: string;
    corps: string;
    author?: User;
    upvoteCount?: number;
    downvoteCount?: number;
}

export type Publications = Publication[];
