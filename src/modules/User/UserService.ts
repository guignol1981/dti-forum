import { User } from './UserDomaine';
import { HttpService } from '@ulaval/modul-components/dist/utils/http/http';
import Vue from 'vue';
import { RestService } from '@/rest-service';

export class UserService implements RestService<User> {
    private readonly httpService: HttpService = Vue.prototype.$http;

    public rechercher(): Promise<User[]> {
        return this.httpService
            .execute<User[]>({
                method: 'get',
                rawUrl: 'api/users'
            })
            .then(response => response.data);
    }

    public rechercherParId(id: string): Promise<User> {
        return this.httpService
            .execute<User>({
                method: 'get',
                rawUrl: `api/users/${id}`
            })
            .then(response => response.data);
    }

    public creer(ressource: User): Promise<User> {
        return this.httpService
            .execute<User>({
                method: 'get',
                rawUrl: `api/users`,
                data: ressource
            })
            .then(response => response.data);
    }

    public modifier(user: User): Promise<User> {
        return this.httpService
            .execute<User>({
                method: 'put',
                rawUrl: `api/users/${user.id}`,
                data: user
            })
            .then(response => response.data);
    }

    public supprimer(id: string): Promise<boolean> {
        return this.httpService
            .execute<void>({
                method: 'delete',
                rawUrl: `api/users/${id}`
            })
            .then(() => true);
    }
}

export const Factory = () => new UserService();
