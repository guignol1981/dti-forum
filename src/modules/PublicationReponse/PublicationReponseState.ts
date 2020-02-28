import RestService from '@/rest-service';
import { AppState } from '@/store';
import {
    PublicationReponse,
    PublicationReponses
} from './PublicationReponseDomaine';
import { PublicationReponseServiceFactory } from './PublicationReponseServiceFactory';

export default class PublicationReponseState {
    public publicationReponses: PublicationReponses = [];
    public restService: RestService<PublicationReponse>;

    constructor(public readonly appState: AppState) {
        this.restService = PublicationReponseServiceFactory();
    }
}
