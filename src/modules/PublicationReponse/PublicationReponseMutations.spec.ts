import { modifierPublications } from '../Publications/PublicationMutations';

describe('PublicationReponse', () => {
    let state: any;
    beforeEach(() => {
        state = {
            publications: []
        };
    });

    it('modifier publications', () => {
        expect(state.publications.length).toBe(0);
        modifierPublications(state, [{ id: '1', title: '123', body: '123' }]);
        expect(state.publications.length).toBe(1);
        expect(state.publications[0].id).toBe('1');
    });
});
