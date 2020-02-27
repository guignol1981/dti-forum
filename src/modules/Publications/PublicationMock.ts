import { Publications } from './PublicationDomaine';
import { LoremGenerate, RandomMinMax } from '@/utils/utils';

export const SET_2: Publications = new Array(RandomMinMax(30, 100))
    .fill(undefined)
    .map(
        (_, i) => (
            i++,
            {
                _id: i.toString(),
                titre: LoremGenerate(RandomMinMax(10, 10)),
                corps: LoremGenerate(RandomMinMax(20, 400)),
                upvoteCount: RandomMinMax(0, 100),
                downvoteCount: RandomMinMax(0, 100)
            }
        )
    );
