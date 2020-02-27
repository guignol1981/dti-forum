import RestService from '@/rest-service';
import { PublicationReponse } from './PublicationReponseDomaine';
import { SET_1 } from './PublicationReponseMock';

export class PublicationReponseServiceMock
    implements RestService<PublicationReponse> {
    public httpService = {} as any;
    private publicationReponses: PublicationReponse[] = SET_1;

    public rechercher(): Promise<PublicationReponse[]> {
        return Promise.resolve<PublicationReponse[]>([
            ...this.publicationReponses
        ]);
    }

    public rechercherParId(id: string): Promise<PublicationReponse> {
        return Promise.resolve(this.publicationReponses[0]);
    }

    public creer(ressource: PublicationReponse): Promise<PublicationReponse> {
        this.publicationReponses.push(ressource);
        return Promise.resolve(ressource);
    }

    public modifier(
        ressource: PublicationReponse
    ): Promise<PublicationReponse> {
        return Promise.resolve(this.publicationReponses[0]);
    }

    public supprimer(id: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}

export const Factory = () => new PublicationReponseServiceMock();
