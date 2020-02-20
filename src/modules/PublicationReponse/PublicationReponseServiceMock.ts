import { PublicationReponse } from './PublicationReponseDomaine';
import { SET_1 } from './PublicationReponseMock';
import { RestService } from '@/rest-service';

export class PublicationReponseServiceMock
    implements RestService<PublicationReponse> {
    private publicationReponses: PublicationReponse[] = SET_1;

    public rechercher(): Promise<PublicationReponse[]> {
        return Promise.resolve<PublicationReponse[]>([
            ...this.publicationReponses
        ]);
    }

    public rechercherParId(id: string): Promise<PublicationReponse> {
        return Promise.resolve(this.publicationReponses[0]);
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
