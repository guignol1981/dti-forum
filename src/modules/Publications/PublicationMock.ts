import { Publications } from './PublicationDomaine';
import { LoremGenerate, RandomMinMax } from '@/utils/utils';

export const SET_1: Publications = [
    {
        id: '123',
        titre: 'titre 1',
        corps: 'test'
    },
    {
        id: '123',
        titre: 'titre 2',
        corps: 'corps 3'
    }
];

export const SET_2: Publications = new Array(RandomMinMax(1, 10))
    .fill(undefined)
    .map(
        (_, i) => (
            i++,
            {
                id: i.toString(),
                titre: LoremGenerate(RandomMinMax(10, 30)),
                corps: LoremGenerate(RandomMinMax(20, 100))
            }
        )
    );
