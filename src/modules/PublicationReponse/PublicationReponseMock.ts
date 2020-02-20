import { PublicationReponses } from './PublicationReponseDomaine';
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

export const SET_1: PublicationReponses = new Array(2).fill(undefined).map(
    (_, i) => (
        i++,
        {
            id: i.toString(),
            publicationId: '1',
            body: lorem.generateWords(Math.floor(Math.random() * 100))
        }
    )
);
