import RestService from '@/rest-service';
import { AppState } from '@/store';
import { User, LoginStatus } from './UserDomaine';
import { UserServiceFactory } from './UserServiceFactory';

export default class UserState {
    public user: User | null = null;
    public restService: RestService<User>;
    public loginStatus: LoginStatus = LoginStatus.PRISTINE;

    constructor(public readonly appState: AppState) {
        this.restService = UserServiceFactory();
    }
}
