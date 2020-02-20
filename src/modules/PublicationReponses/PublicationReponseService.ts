import { PublicationReponse } from './PublicationReponseDomaine';
import { HttpService } from '@ulaval/modul-components/dist/utils/http/http';
import Vue from 'vue';
import { RestService } from '@/rest-service';

export class PublicationReponseService
    implements RestService<PublicationReponse> {
    private readonly httpService: HttpService = Vue.prototype.$http;

    public rechercher(): Promise<PublicationReponse[]> {
        return this.httpService
            .execute<PublicationReponse[]>({
                method: 'get',
                rawUrl: '/publicationReponses'
            })
            .then(response => response.data);
    }

    public rechercherParId(id: string): Promise<PublicationReponse> {
        return this.httpService
            .execute<PublicationReponse>({
                method: 'get',
                rawUrl: `/publicationReponses/${id}`
            })
            .then(response => response.data);
    }

    public modifier(
        publicationReponse: PublicationReponse
    ): Promise<PublicationReponse> {
        return this.httpService
            .execute<PublicationReponse>({
                method: 'put',
                rawUrl: `/publicationReponses/${publicationReponse.id}`,
                data: publicationReponse
            })
            .then(response => response.data);
    }

    public supprimer(id: string): Promise<boolean> {
        return this.httpService
            .execute<void>({
                method: 'delete',
                rawUrl: `/publicationReponses/${id}`
            })
            .then(() => true);
    }
}

export const Factory = () => new PublicationReponseService();
