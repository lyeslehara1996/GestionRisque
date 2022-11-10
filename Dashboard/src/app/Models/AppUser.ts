export interface AppUser {
userid ?: string;
nomUser ?:string ;
prenomUser ?:string;
username ?: string;
email ?:string;
password ?: string;
roles?:roles;
agence?:agence;
permissions ?: string[];
jwtAccessToken ?: string;


}

export interface agence {
    agenceId?:string ;
    agenceName?:string ;
    agenceDescription?:string ;

}
export interface roles {
    roleId?:string ;
    name?:string ;
}