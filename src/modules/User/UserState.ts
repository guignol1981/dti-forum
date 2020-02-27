import RestService from '@/rest-service';
import { AppState } from '@/store/factory';
import { User } from './UserDomaine';
import { UserServiceFactory } from './UserServiceFactory';

export default class UserState {
    public user: User | null = null;
    public restService: RestService<User>;

    constructor(public readonly appState: AppState) {
        this.restService = UserServiceFactory();
    }
}
