import { CreditRisqueRapport } from "./CreditRisqueRapport";

export interface AllSelected{
    id: number ;
    datereporte:any;
    checked:Boolean;
    creditParticulier:CreditRisqueRapport;
    creditEntreprise:CreditRisqueRapport;
    
}