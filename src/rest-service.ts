export interface RestService<T> {
  rechercher: () => Promise<T[]>;
  rechercherParId: (id: string) => Promise<T>;
  modifier: (ressource: T) => Promise<T>;
  supprimer: (id: string) => Promise<boolean>;
}
