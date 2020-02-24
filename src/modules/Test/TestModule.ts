import { Module, ActionContext } from 'vuex';
import { AppState } from '@/store/factory';
import TestState from './TestState';
import { Tests } from './TestDomaine';
import { modifierTests } from './TestMutations';
import {
    GETTER_TESTS,
    MUTATION_TESTS,
    ACTION_CHERCHER_TESTS
} from './TestModuleDefinitions';

export function TestModuleFactory(
    appState: AppState
): Module<TestState, AppState> {
    return {
        namespaced: true,
        state: new TestState(appState),
        getters: {
            [GETTER_TESTS]: (state: TestState) => state.tests
        },
        mutations: {
            [MUTATION_TESTS]: (state: TestState, tests: Tests): void =>
                modifierTests(state, tests)
        },
        actions: {
            [ACTION_CHERCHER_TESTS]: (
                context: ActionContext<TestState, AppState>
            ): void => {
                context.state.restService
                    .rechercher()
                    .then((tests: Tests) =>
                        context.commit(MUTATION_TESTS, tests)
                    );
            }
        }
    };
}

export default TestModuleFactory;
