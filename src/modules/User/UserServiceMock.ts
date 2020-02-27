import RestService from '../../rest-service';
import { User } from './UserDomaine';
import { SET_1 } from './UserMock';

export class UserServiceMock implements RestService<User> {
    public httpService = {} as any;
    private user: User = SET_1;

    public rechercher(): Promise<User[]> {
        return Promise.resolve<User[]>(this.user as any);
    }

    public rechercherParId(id: string): Promise<User> {
        return Promise.resolve(this.user);
    }

    public creer(ressource: User): Promise<User> {
        return Promise.resolve(Object.assign(ressource, { _id: 1 }));
    }

    public modifier(ressource: User): Promise<User> {
        this.user = ressource;
        return Promise.resolve(this.user);
    }

    public supprimer(id: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}

export const Factory = () => new UserServiceMock();
