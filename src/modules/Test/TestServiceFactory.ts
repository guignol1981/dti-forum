import { Test } from './TestDomaine';
import { RestService } from '@/rest-service';

export function TestServiceFactory(): RestService<Test> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require('./TestServiceMOCK').Factory();
}
