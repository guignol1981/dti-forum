import { PublicationReponses } from './PublicationReponseDomaine';
import { LoremGenerate } from '@/utils/utils';

export const SET_1: PublicationReponses = new Array(
    Math.floor(Math.random() * 10)
)
    .fill(undefined)
    .map(
        (_, i) => (
            i++,
            {
                id: i.toString(),
                publicationId: '1',
                corps: LoremGenerate(Math.floor(Math.random() * 100)),
                upvotes: [],
                downvotes: [],
                best: false
            }
        )
    );
