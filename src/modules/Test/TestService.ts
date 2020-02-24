import { Test } from './TestDomaine';
import { HttpService } from '@ulaval/modul-components/dist/utils/http/http';
import Vue from 'vue';
import { RestService } from '@/rest-service';

export class TestService implements RestService<Test> {
  private readonly httpService: HttpService = Vue.prototype.$http;

  public rechercher(): Promise<Test[]> {
    return this.httpService
      .execute<Test[]>({
        method: 'get',
        rawUrl: '/tests'
      })
      .then(response => response.data);
  }

  public rechercherParId(id: string): Promise<Test> {
    return this.httpService
      .execute<Test>({
        method: 'get',
        rawUrl: `/tests/${id}`
      })
      .then(response => response.data);
  }

  public modifier(test: Test): Promise<Test> {
    return this.httpService
      .execute<Test>({
        method: 'put',
        rawUrl: `/tests/${test.id}`,
        data: test
      })
      .then(response => response.data);
  }

  public supprimer(id: string): Promise<boolean> {
    return this.httpService
      .execute<void>({
        method: 'delete',
        rawUrl: `/tests/${id}`
      })
      .then(() => true);
  }
}

export const Factory = () => new TestService();
