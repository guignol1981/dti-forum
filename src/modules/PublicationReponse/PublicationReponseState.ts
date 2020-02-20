import {
    PublicationReponses,
    PublicationReponse
} from './PublicationReponseDomaine';
import { AppState } from '@/store/factory';
import { PublicationReponseServiceFactory } from './PublicationReponseServiceFactory';
import { RestService } from '@/rest-service';

export default class PublicationReponseState {
    public publicationReponses: PublicationReponses = [];
    public restService: RestService<PublicationReponse>;

    constructor(public readonly appState: AppState) {
        this.restService = PublicationReponseServiceFactory();
    }
}
