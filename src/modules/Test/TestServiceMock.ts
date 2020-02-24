import { Test } from "./TestDomaine";
import { SET_1 } from "./TestMock";
import { RestService } from "@/rest-service";

export class TestServiceMock implements RestService<Test> {
  private tests: Test[] = SET_1;

  public rechercher(): Promise<Test[]> {
    return Promise.resolve<Test[]>([...this.tests]);
  }

  public rechercherParId(id: string): Promise<Test> {
    return Promise.resolve(this.tests[0]);
  }

  public modifier(ressource: Test): Promise<Test> {
    return Promise.resolve(this.tests[0]);
  }

  public supprimer(id: string): Promise<boolean> {
    return Promise.resolve(true);
  }
}

export const Factory = () => new TestServiceMock();