export class User {
    protected nom:string
    protected prenom:string
    protected email:string
    protected token:string
    protected role:string
    protected permissions:[string]

    constructor (userData:userData) {
        this.nom = userData.nom
        this.prenom = userData.prenom
        this.email = userData.email
        this.token = userData.token
        this.role = userData.role
        this.permissions = userData.permissions
    }

    /**
     * getName
     */
    public getNom():string {
        return this.nom
    }

    /**
     * getRole
     */
    public getRole(): string {
        return this.role
    }

    /**
     * getPermissions
     */
    public getPermissions() {
        return this.permissions
    }

    public hasRole(role:string): boolean {
        return this.role.toLowerCase() === role.toLowerCase()
    }

    public hasPermission(permission:string): boolean {
        // permission = String(permission).toLowerCase()
        console.log(permission)
        return this.getPermissions().includes(permission)
    }
}


interface userData {
    nom:string,
    prenom:string,
    email:string,
    token:string,
    role:string,
    permissions:[string]
}