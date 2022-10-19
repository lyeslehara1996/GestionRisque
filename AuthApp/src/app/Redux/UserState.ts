export enum UserStateEnum {

    DATA,
    ERROR
}

export interface UserDataState<T> {
    dataState?:UserStateEnum,
    data?:T,
    erroMessage?:string;
}