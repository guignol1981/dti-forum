import { LoremGenerate, RandomMinMax } from '@/utils/utils';
import { Publications } from './PublicationDomaine';

export const SET_2: Publications = new Array(RandomMinMax(30, 100))
    .fill(undefined)
    .map(
        (_, i) => (
            i++,
            {
                _id: i.toString(),
                author: { _id: '1', username: 'test', email: 'test@test.com' },
                titre: LoremGenerate(RandomMinMax(10, 10)),
                corps: LoremGenerate(RandomMinMax(20, 400)),
                upvotes: [],
                downvotes: []
            }
        )
    );
