import { Publication } from './PublicationDomaine';
import { HttpService } from '@ulaval/modul-components/dist/utils/http/http';
import Vue from 'vue';
import { RestService } from '@/rest-service';

export class PublicationService implements RestService<Publication> {
    private readonly httpService: HttpService = Vue.prototype.$http;

    public rechercher(): Promise<Publication[]> {
        return this.httpService
            .execute<Publication[]>({
                method: 'get',
                rawUrl: '/publications'
            })
            .then(response => response.data);
    }

    public rechercherParId(id: string): Promise<Publication> {
        return this.httpService
            .execute<Publication>({
                method: 'get',
                rawUrl: `/publications/${id}`
            })
            .then(response => response.data);
    }

    public creer(ressource: Publication): Promise<Publication> {
        return this.httpService
            .execute<Publication>({
                method: 'post',
                rawUrl: '/publications',
                data: ressource
            })
            .then(response => response.data);
    }

    public modifier(publication: Publication): Promise<Publication> {
        return this.httpService
            .execute<Publication>({
                method: 'put',
                rawUrl: `/publications/${publication.id}`,
                data: publication
            })
            .then(response => response.data);
    }

    public supprimer(id: string): Promise<boolean> {
        return this.httpService
            .execute<void>({
                method: 'delete',
                rawUrl: `/publications/${id}`
            })
            .then(() => true);
    }
}

export const Factory = () => new PublicationService();
