export enum ProductActionsTypes {

    GETALLUSERSS = "[AppUser] GET ALL Users",

}

export interface ActionEvent {
    type: ProductActionsTypes,
    payload ?: any
}


export enum DataStateEnum {

    LOADING,
    LOADED,
    ERROR
}

export interface AppDataState<T> {
 
    dataState?:DataStateEnum,
    data?:T,
    erroMessage?:string
}