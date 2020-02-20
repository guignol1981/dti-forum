import { Publications } from './PublicationDomaine';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

export const SET_1: Publications = [
    {
        id: '123',
        title: 'title 1',
        body: 'test'
    },
    {
        id: '123',
        title: 'title 2',
        body: 'body 3'
    }
];

export const SET_2: Publications = new Array(5).fill(undefined).map(
    (_, i) => (
        i++,
        {
            id: i.toString(),
            title: lorem.generateWords(Math.floor(Math.random() * 20)),
            body: lorem.generateWords(Math.floor(Math.random() * 100))
        }
    )
);
