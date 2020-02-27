import { Module, ActionContext } from 'vuex';
import { AppState } from '@/store/factory';
import UserState from './UserState';
import { Users, User } from './UserDomaine';
import { modifierUser } from './UserMutations';
import {
    GETTER_USER,
    MUTATION_USER,
    ACTION_CHERCHER_USER
} from './UserModuleDefinitions';

export function UserModuleFactory(
    appState: AppState
): Module<UserState, AppState> {
    return {
        namespaced: true,
        state: new UserState(appState),
        getters: {
            [GETTER_USER]: (state: UserState) => state.user
        },
        mutations: {
            [MUTATION_USER]: (state: UserState, user: User): void =>
                modifierUser(state, user)
        },
        actions: {
            [ACTION_CHERCHER_USER]: (
                context: ActionContext<UserState, AppState>
            ): void => {
                context.state.restService
                    .rechercher()
                    .then((users: Users) =>
                        context.commit(MUTATION_USER, users)
                    );
            }
        }
    };
}

export default UserModuleFactory;
