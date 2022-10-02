package com.it.demo.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.it.demo.Entities.Garantie;
import com.it.demo.Entities.Impaye;
import com.it.demo.Entities.Produit;
import com.it.demo.Entities.Risque;
import com.it.demo.Entities.SenarioStre;

public interface GestionCreServices {
	
	//produitImapye
Produit addtoProduit(Produit produit);
List<Produit> getAllProduit();
Optional<Produit> findById(String id );
ResponseEntity<Produit> updateProduit( Produit produit);

//risque
Risque addtoRisque(Risque risque);
List<Risque> getAllRisque();
Optional<Risque> findByIdRisque(long id );
ResponseEntity<Risque> updateRisque( Risque risque);


//senario Stress
SenarioStre addtoSenario(SenarioStre senario);
List<SenarioStre>getAllsenario();
Optional<SenarioStre> findByIdSenario(long id );
ResponseEntity<SenarioStre> updateSenario( SenarioStre senario);


//impayé
Impaye addtoImaye(Impaye impaye);
List<Impaye>getallImapye();
Optional<Impaye> findByIdImpaye(long id);
ResponseEntity<Impaye> updateImpaye(Impaye impaye);

//grantie
Garantie addtoGarantie(Garantie garantie);
List<Garantie> getAllgarantie();
Optional<Garantie> findByIdGarantie(long id);
ResponseEntity<Garantie> updateGarantie(Garantie garantie);

//engagement


}
