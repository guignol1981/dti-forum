import { HttpService } from '@ulaval/modul-components/dist/utils/http/http';

export default interface RestService<T> {
    httpService: HttpService;
    rechercher: () => Promise<T[]>;
    rechercherParId: (id: string) => Promise<T>;
    creer: (ressource: T) => Promise<T>;
    modifier: (ressource: T) => Promise<T>;
    supprimer: (id: string) => Promise<boolean>;
}
