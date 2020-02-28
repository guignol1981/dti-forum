import { User, LoginStatus } from './UserDomaine';
import UserState from './UserState';

export function modifierUser(state: UserState, user: User): void {
    state.user = user;
}

export function modifierLoginStatus(
    state: UserState,
    status: LoginStatus
): void {
    state.loginStatus = status;
}
