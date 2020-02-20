import { Publications, Publication } from './PublicationDomaine';
import { AppState } from '@/store/factory';
import { PublicationServiceFactory } from './PublicationServiceFactory';
import { RestService } from '@/rest-service';

export default class PublicationState {
    public publications: Publications = [];
    public restService: RestService<Publication>;

    constructor(public readonly appState: AppState) {
        this.restService = PublicationServiceFactory();
    }
}
