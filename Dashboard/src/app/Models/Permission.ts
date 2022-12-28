import { Privileges } from 'app/Models/Privileges';
import { Ressources } from 'app/Models/Ressources';
export interface Permission{
    id:string;
    permissionname:string;
    ressources :[Ressources]
    privéleges :[Privileges]
}