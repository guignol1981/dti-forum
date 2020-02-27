import RestService from '../../rest-service';
import { User } from './UserDomaine';
import { SET_1 } from './UserMock';

export class UserServiceMock implements RestService<User> {
    public httpService = {} as any;
    private users: User[] = SET_1;

    public rechercher(): Promise<User[]> {
        return Promise.resolve<User[]>([...this.users]);
    }

    public rechercherParId(id: string): Promise<User> {
        return Promise.resolve(this.users.find(u => u._id! === id)!);
    }

    public creer(ressource: User): Promise<User> {
        return Promise.resolve(Object.assign(ressource, { _id: 1 }));
    }

    public modifier(ressource: User): Promise<User> {
        return Promise.resolve(ressource);
    }

    public supprimer(id: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}

export const Factory = () => new UserServiceMock();
