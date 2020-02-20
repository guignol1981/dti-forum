import { PublicationReponse } from './PublicationReponseDomaine';
import { RestService } from '@/rest-service';

export function PublicationReponseServiceFactory(): RestService<
    PublicationReponse
> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require('./PublicationReponseServiceMOCK').Factory();
}
