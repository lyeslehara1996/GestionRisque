package com.it.demo.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.it.demo.Entities.Impaye;
import com.it.demo.Entities.Produit;
import com.it.demo.Entities.Risque;
import com.it.demo.Entities.SenarioStre;
import com.it.demo.Services.GestionCreServices;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@AllArgsConstructor
@Slf4j
public class MainControler {
	
	private GestionCreServices gestCreservice;
	
	
	//Produit
	@PostMapping("/saveProduit")
	 public Produit saveProduit(@RequestBody Produit p)
	 {
		 return gestCreservice.addtoProduit(p);
	 }
	@GetMapping("/produitBYid/{id}")
	public  Optional<Produit> findBy( @PathVariable String id ) {
		return gestCreservice.findById(id);
	}
	
	@PutMapping("/updateProduit/{id}")
	 public ResponseEntity<Produit> updateProduct(@PathVariable(value = "id") String produitid , @RequestBody Produit p)
	 {
		p.setMAIN_PRODUC_DESC(produitid);
		ResponseEntity<Produit> prod = gestCreservice.updateProduit(p);
		 if(prod == null) {
		        return ResponseEntity.notFound().build();
		    }
		    return ResponseEntity.noContent().build();
	 }
	
	@GetMapping("/allProduct")
	 public List<Produit> getallproduit(){
		 List<Produit> listP= new ArrayList<Produit>();
		 
		 listP=gestCreservice.getAllProduit(); 
		 return listP;
	 }
	//Risque
	@PostMapping("/saveRisque")
	 public Risque saveRisque(@RequestBody Risque  risque) {
		return  gestCreservice.addtoRisque(risque);
	 }
	
	
	@GetMapping("/allrisque")
	public List<Risque> allRisque(){
		List<Risque>listRisque= new ArrayList<Risque>();
		
		listRisque=gestCreservice.getAllRisque();
		return listRisque;
	}
	
	@PutMapping("/updaterisque/{id}")
	public ResponseEntity<Risque> updatrisque(@PathVariable(value = "id") Long risqueid , @RequestBody Risque r){
	r.setId(risqueid);
		ResponseEntity<Risque> risq = gestCreservice.updateRisque( r);
		 if(risq == null) {
		        return ResponseEntity.notFound().build();
		    }
		    return ResponseEntity.noContent().build();
	}
	
	
	//Senario
	@PostMapping("/saveSenario")
	public SenarioStre saveSenario(@RequestBody SenarioStre  senario) {
		return gestCreservice.addtoSenario(senario);
	}
	@GetMapping("/allsenario")
	 public List<SenarioStre> allsenario(){
		 List<SenarioStre> listSenario = new ArrayList<SenarioStre>();
		 listSenario= gestCreservice.getAllsenario(); 
		 return listSenario;
	 }
	
	@PutMapping("/updateSenario/{id}")
	public ResponseEntity<Risque>updatSenario(@PathVariable(value = "id") Long senarioid , @RequestBody SenarioStre s){
		s.setSenario_id(senarioid);
		ResponseEntity<SenarioStre> sena = gestCreservice.updateSenario(s);
		 if(sena == null) {
		        return ResponseEntity.notFound().build();
		    }
		    return ResponseEntity.noContent().build();
	}
	
	
	//Impayee
	@PostMapping("/saveImpaye")
	public Impaye saveImpaye( @RequestBody Impaye impaye) {
		log.info("imapyeeeeeeee  " +impaye.getDEFAULT_DATE());
		return gestCreservice.addtoImaye(impaye);
	}
	
	@GetMapping("/AllImpaye")
	public List<Impaye>allImpaye(){
		List<Impaye>listImpaye = new ArrayList<Impaye>();
		listImpaye = gestCreservice.getallImapye()	;
		return listImpaye;
	};
	
	
	
	
}
