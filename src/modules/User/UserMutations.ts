import { User } from './UserDomaine';
import UserState from './UserState';

export function modifierUser(state: UserState, user: User): void {
    state.user = user;
}
