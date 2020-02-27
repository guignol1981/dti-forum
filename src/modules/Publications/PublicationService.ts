import RestService from '@/rest-service';
import { HttpService } from '@ulaval/modul-components/dist/utils/http/http';
import Vue from 'vue';
import { Publication } from './PublicationDomaine';

export class PublicationService implements RestService<Publication> {
    public readonly httpService: HttpService = Vue.prototype.$http;

    public rechercher(): Promise<Publication[]> {
        return this.httpService
            .execute<Publication[]>({
                method: 'get',
                rawUrl: 'api/publications'
            })
            .then(response => {
                return response.data;
            });
    }

    public rechercherParId(id: string): Promise<Publication> {
        return this.httpService
            .execute<Publication>({
                method: 'get',
                rawUrl: `api/publications/${id}`
            })
            .then(response => response.data);
    }

    public creer(ressource: Publication): Promise<Publication> {
        return this.httpService
            .execute<Publication>({
                method: 'post',
                rawUrl: 'api/publications',
                data: ressource
            })
            .then(response => response.data);
    }

    public modifier(publication: Publication): Promise<Publication> {
        return this.httpService
            .execute<Publication>({
                method: 'put',
                rawUrl: `api/publications/${publication._id}`,
                data: publication
            })
            .then(response => response.data);
    }

    public supprimer(id: string): Promise<boolean> {
        return this.httpService
            .execute<void>({
                method: 'delete',
                rawUrl: `api/publications/${id}`
            })
            .then(() => true);
    }
}

export const Factory = () => new PublicationService();
