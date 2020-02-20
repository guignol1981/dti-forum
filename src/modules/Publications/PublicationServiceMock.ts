import { Publication } from './PublicationDomaine';
import { SET_2 } from './PublicationMock';
import { RestService } from '@/rest-service';

export class PublicationServiceMock implements RestService<Publication> {
    private publications: Publication[] = [...SET_2];

    public rechercher(): Promise<Publication[]> {
        return Promise.resolve<Publication[]>(this.publications);
    }

    public rechercherParId(id: string): Promise<Publication> {
        return Promise.resolve(this.publications.find(p => p.id === id)!);
    }

    public modifier(ressource: Publication): Promise<Publication> {
        return Promise.resolve(ressource);
    }

    public supprimer(id: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}

export const Factory = () => new PublicationServiceMock();
