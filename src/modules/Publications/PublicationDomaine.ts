export interface Publication {
    _id?: string;
    titre: string;
    corps: string;
    upvoteCount?: number;
    downvoteCount?: number;
}

export type Publications = Publication[];
