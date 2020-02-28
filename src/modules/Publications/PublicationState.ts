import RestService from '@/rest-service';
import { AppState } from '@/store';
import { Publication, Publications } from './PublicationDomaine';
import { PublicationServiceFactory } from './PublicationServiceFactory';

export default class PublicationState {
    public publications: Publications = [];
    public publicationConsultation: Publication | null = null;
    public restService: RestService<Publication>;

    constructor(public readonly appState: AppState) {
        this.restService = PublicationServiceFactory();
    }
}
