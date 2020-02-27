import RestService from '@/rest-service';
import { Publication } from './PublicationDomaine';

export function PublicationServiceFactory(): RestService<Publication> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require('./PublicationServiceMOCK').Factory();
}
