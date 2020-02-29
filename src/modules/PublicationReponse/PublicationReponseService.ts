import RestService from '@/rest-service';
import { HttpService } from '@ulaval/modul-components/dist/utils/http/http';
import Vue from 'vue';
import {
    PublicationReponse,
    PublicationReponses
} from './PublicationReponseDomaine';

export class PublicationReponseService
    implements RestService<PublicationReponse> {
    public readonly httpService: HttpService = Vue.prototype.$http;
    private readonly baseUrl: string = `${process.env.VUE_APP_BASE_URL}/api/publication-reponses`;

    public rechercher(): Promise<PublicationReponse[]> {
        return this.httpService
            .execute<PublicationReponse[]>({
                method: 'get',
                rawUrl: this.baseUrl
            })
            .then(response => response.data);
    }

    public rechercherParPublicationId(
        publicationId: string
    ): Promise<PublicationReponses> {
        return this.httpService
            .execute<PublicationReponses>({
                method: 'get',
                rawUrl: `${this.baseUrl}/publication/${publicationId}`
            })
            .then((response: any) => response.data);
    }

    public rechercherParId(id: string): Promise<PublicationReponse> {
        return this.httpService
            .execute<PublicationReponse>({
                method: 'get',
                rawUrl: `${this.baseUrl}/${id}`
            })
            .then(response => response.data);
    }

    public creer(ressource: PublicationReponse): Promise<PublicationReponse> {
        return this.httpService
            .execute<PublicationReponse>({
                method: 'post',
                rawUrl: this.baseUrl,
                data: ressource
            })
            .then(response => response.data);
    }

    public modifier(
        publicationReponse: PublicationReponse
    ): Promise<PublicationReponse> {
        return this.httpService
            .execute<PublicationReponse>({
                method: 'put',
                rawUrl: `${this.baseUrl}/${publicationReponse._id}`,
                data: publicationReponse
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
}

export const Factory = () => new PublicationReponseService();
