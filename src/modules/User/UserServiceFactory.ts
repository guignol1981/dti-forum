import { User } from './UserDomaine';
import { RestService } from '@/rest-service';

export function UserServiceFactory(): RestService<User> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require('./UserServiceMOCK').Factory();
}
