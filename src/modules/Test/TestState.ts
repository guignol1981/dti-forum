import { Tests, Test } from './TestDomaine';
import { AppState } from '@/store/factory';
import { TestServiceFactory } from './TestServiceFactory';
import { RestService } from '@/rest-service';

export default class TestState {
    public tests: Tests = [];
    public restService: RestService<Test>;

    constructor(public readonly appState: AppState) {
        this.restService = TestServiceFactory();
    }
}
