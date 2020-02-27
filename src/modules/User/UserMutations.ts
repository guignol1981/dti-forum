import UserState from './UserState';
import { User } from './UserDomaine';

export function modifierUser(state: UserState, user: User): void {
    state.user = user;
}
