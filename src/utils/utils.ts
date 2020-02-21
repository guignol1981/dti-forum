import { LoremIpsum } from 'lorem-ipsum';
import { IGeneratorOptions } from 'lorem-ipsum/types/src/lib/generator';

export interface LoremOptions extends IGeneratorOptions {}

export function LoremGenerate(
    wordsCount: number = 10,
    options: LoremOptions = {}
): string {
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: options.sentencesPerParagraph?.max || 8,
            min: options.sentencesPerParagraph?.min || 4
        },
        wordsPerSentence: options.wordsPerSentence || {
            max: 16,
            min: 4
        }
    });

    return lorem.generateWords(Math.floor(Math.random() * wordsCount));
}

export function RandomMinMax(min: number = 0, max: number = 10): number {
    return Math.floor(Math.random() * max) + min;
}
