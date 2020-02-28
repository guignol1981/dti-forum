export interface User {
    _id?: string;
    username: string;
    email: string;
}

export type Users = User[];

export enum LoginStatus {
    PRISTINE = 'pristine',
    SUCCES = 'succes',
    ECHEC = 'echec'
}
