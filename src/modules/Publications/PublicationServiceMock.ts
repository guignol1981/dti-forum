import RestService from '@/rest-service';
import { Publication } from './PublicationDomaine';
import { SET_2 } from './PublicationMock';

export class PublicationServiceMock implements RestService<Publication> {
    public httpService = {} as any;
    private publications: Publication[] = [...SET_2];

    public rechercher(): Promise<Publication[]> {
        return Promise.resolve<Publication[]>(this.publications);
    }

    public rechercherParId(id: string): Promise<Publication> {
        return Promise.resolve(this.publications.find(p => p._id === id)!);
    }

    public creer(ressource: Publication): Promise<Publication> {
        this.publications.push(
            Object.assign(ressource, {
                id: this.publications.length,
                upvoteCount: 0,
                downvoteCount: 0
            })
        );
        return Promise.resolve(ressource);
    }

    public modifier(ressource: Publication): Promise<Publication> {
        return Promise.resolve(ressource);
    }

    public supprimer(id: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}

export const Factory = () => new PublicationServiceMock();
