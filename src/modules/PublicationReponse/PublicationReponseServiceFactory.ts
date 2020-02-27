import RestService from '@/rest-service';
import { PublicationReponse } from './PublicationReponseDomaine';

export function PublicationReponseServiceFactory(): RestService<
    PublicationReponse
> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require('./PublicationReponseServiceMOCK').Factory();
}
