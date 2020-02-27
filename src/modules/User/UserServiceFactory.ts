import RestService from '@/rest-service';
import { User } from './UserDomaine';

export function UserServiceFactory(): RestService<User> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require('./UserServiceMOCK').Factory();
}
