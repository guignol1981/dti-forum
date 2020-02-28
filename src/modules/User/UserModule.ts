import { AppState } from '@/store';
import { ActionContext, Module } from 'vuex';
import { User, Users, LoginStatus } from './UserDomaine';
import {
    ACTION_CHERCHER_USER,
    ACTION_REGISTER,
    ACTION_SIGN_OUT,
    ACTION_SIGN_IN,
    GETTER_USER,
    MUTATION_USER,
    MUTATION_LOGIN_STATUS,
    GETTER_LOGIN_STATUS
} from './UserModuleDefinitions';
import { modifierUser, modifierLoginStatus } from './UserMutations';
import UserService from './UserService';
import UserState from './UserState';

export function UserModuleFactory(
    appState: AppState
): Module<UserState, AppState> {
    return {
        namespaced: true,
        state: new UserState(appState),
        getters: {
            [GETTER_USER]: (state: UserState) => state.user,
            [GETTER_LOGIN_STATUS]: (state: UserState) => state.loginStatus
        },
        mutations: {
            [MUTATION_USER]: (state: UserState, user: User): void =>
                modifierUser(state, user),
            [MUTATION_LOGIN_STATUS]: (state: UserState, status: LoginStatus) =>
                modifierLoginStatus(state, status)
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
            [ACTION_REGISTER]: (
                context: ActionContext<UserState, AppState>,
                credential: {
                    username: string;
                    email: string;
                    password: string;
                }
            ): void => {
                (context.state.restService as UserService)
                    .register(credential)
                    .then(() =>
                        context.commit(
                            MUTATION_LOGIN_STATUS,
                            LoginStatus.SUCCES
                        )
                    );
            },
            [ACTION_SIGN_IN]: (
                context: ActionContext<UserState, AppState>,
                credential: { email: string; password: string }
            ): void => {
                (context.state.restService as UserService)
                    .signIn(credential)
                    .then(() =>
                        context.commit(
                            MUTATION_LOGIN_STATUS,
                            LoginStatus.SUCCES
                        )
                    );
            },
            [ACTION_SIGN_OUT]: (
                context: ActionContext<UserState, AppState>
            ): void => {
                (context.state.restService as UserService)
                    .signOut()
                    .then(() => {
                        context.commit(MUTATION_USER, null);
                        context.commit(
                            MUTATION_LOGIN_STATUS,
                            LoginStatus.PRISTINE
                        );
                    });
            }
        }
    };
}

export default UserModuleFactory;
