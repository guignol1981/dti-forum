import RestService from '@/rest-service';
import { HttpService } from '@ulaval/modul-components/dist/utils/http/http';
import Vue from 'vue';
import { User } from './UserDomaine';

export default class UserService implements RestService<User> {
    public readonly httpService: HttpService = Vue.prototype.$http;
    private readonly baseUrl: string = `${process.env.VUE_APP_BASE_URL}/api/users`;

    public rechercher(): Promise<User[]> {
        return this.httpService
            .execute<User[]>({
                method: 'get',
                rawUrl: this.baseUrl
            })
            .then(response => response.data);
    }

    public rechercherParId(id: string): Promise<User> {
        return this.httpService
            .execute<User>({
                method: 'get',
                rawUrl: `${this.baseUrl}/${id}`
            })
            .then(response => response.data);
    }

    public creer(ressource: User): Promise<User> {
        return this.httpService
            .execute<User>({
                method: 'post',
                rawUrl: `${this.baseUrl}/register`,
                data: ressource
            })
            .then(response => response.data);
    }

    public modifier(user: User): Promise<User> {
        return this.httpService
            .execute<User>({
                method: 'put',
                rawUrl: `${this.baseUrl}/${user._id}`,
                data: user
            })
            .then(response => response.data);
    }

    public supprimer(id: string): Promise<boolean> {
        return this.httpService
            .execute<void>({
                method: 'delete',
                rawUrl: `${this.baseUrl}/${id}`
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
                rawUrl: `${this.baseUrl}/register`,
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
                rawUrl: `${this.baseUrl}/login`,
                data: credential
            })
            .then((reponse: any) => reponse.data);
    }

    public logout(): Promise<boolean> {
        return this.httpService
            .execute<boolean>({
                method: 'post',
                rawUrl: `${this.baseUrl}/logout`
            })
            .then(() => true);
    }
}

export const Factory = () => new UserService();
