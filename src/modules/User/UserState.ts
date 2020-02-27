import { User } from './UserDomaine';
import { AppState } from '@/store/factory';
import { UserServiceFactory } from './UserServiceFactory';
import { RestService } from '@/rest-service';

export default class UserState {
    public user: User | null = null;
    public restService: RestService<User>;

    constructor(public readonly appState: AppState) {
        this.restService = UserServiceFactory();
    }
}
