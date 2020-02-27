import { AppState } from '@/store/factory';
import { ActionContext, Module } from 'vuex';
import { User, Users } from './UserDomaine';
import {
    ACTION_CHERCHER_USER,
    ACTION_ENREGISTRER_USER,
    ACTION_LOGOUT,
    ACTION_SIGNIN,
    GETTER_USER,
    MUTATION_USER
} from './UserModuleDefinitions';
import { modifierUser } from './UserMutations';
import UserService from './UserService';
import UserState from './UserState';

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
            },
            [ACTION_ENREGISTRER_USER]: (
                context: ActionContext<UserState, AppState>,
                credential: {
                    username?: string;
                    email: string;
                    password: string;
                }
            ): void => {
                context.state.restService.creer(credential as User);
            },
            [ACTION_SIGNIN]: (
                context: ActionContext<UserState, AppState>,
                credential: { email: string; password: string }
            ): void => {
                (context.state.restService as UserService)
                    .signIn(credential)
                    .then((user: User) => context.commit(MUTATION_USER, user));
            },
            [ACTION_LOGOUT]: (
                context: ActionContext<UserState, AppState>
            ): void => {
                (context.state.restService as UserService)
                    .logout()
                    .then(() => context.commit(MUTATION_USER, null));
            }
        }
    };
}

export default UserModuleFactory;
