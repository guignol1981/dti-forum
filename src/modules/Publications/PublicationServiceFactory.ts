import { Publication } from './PublicationDomaine';
import { RestService } from '@/rest-service';

export function PublicationServiceFactory(): RestService<Publication> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require('./PublicationServiceMOCK').Factory();
}
