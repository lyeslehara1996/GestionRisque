export interface AppUser {
id ?: number;
nomUser ?:string ;
prenomUser ?:string;
username ?: string;
email ?:string;
password ?: string;
roles?:roles;
agence?:agence;

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
    permissions ?:any[];
}

export interface permisision {
    permisisionId?:string ;
    namepermission?:string ;
   
}

