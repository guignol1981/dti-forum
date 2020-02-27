import RestService from '@/rest-service';
import { HttpService } from '@ulaval/modul-components/dist/utils/http/http';
import Vue from 'vue';
import { User } from './UserDomaine';

export default class UserService implements RestService<User> {
    public readonly httpService: HttpService = Vue.prototype.$http;

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
                method: 'post',
                rawUrl: `api/users/register`,
                data: ressource
            })
            .then(response => response.data);
    }

    public modifier(user: User): Promise<User> {
        return this.httpService
            .execute<User>({
                method: 'put',
                rawUrl: `api/users/${user._id}`,
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

    public register(credential: {
        username: string;
        email: string;
        password: string;
    }): Promise<boolean> {
        return this.httpService
            .execute<boolean>({
                method: 'post',
                rawUrl: `api/users/register`,
                data: credential
            })
            .then(response => response.data);
    }

    public signIn(credential: {
        email: string;
        password: string;
    }): Promise<User> {
        return this.httpService
            .execute<User>({
                method: 'post',
                rawUrl: 'api/users/login',
                data: credential
            })
            .then((reponse: any) => reponse.data);
    }

    public logout(): Promise<boolean> {
        return this.httpService
            .execute<boolean>({
                method: 'post',
                rawUrl: 'api/users/logout'
            })
            .then(() => true);
    }
}

export const Factory = () => new UserService();
