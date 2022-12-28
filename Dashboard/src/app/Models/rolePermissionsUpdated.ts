import { Permission } from 'app/Models/Permission';
import { Niveau } from './Niveau';
export interface rolePermissionsUpdated{

    id:number;
    name:string ;
    niveau:[Niveau];
    permission:[Permission];
    checked:Boolean;
    
}