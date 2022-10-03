package com.it.demo.Services;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.joda.time.Days;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.it.demo.Entities.Garantie;
import com.it.demo.Entities.Impaye;
import com.it.demo.Entities.Produit;
import com.it.demo.Entities.Risque;
import com.it.demo.Entities.SenarioStre;
import com.it.demo.Repositories.ImpayeRepository;
import com.it.demo.Repositories.ProduitRepository;
import com.it.demo.Repositories.RisqueRepository;
import com.it.demo.Repositories.SenarioStressRepository;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
@Service
@Transactional
@AllArgsConstructor
@Slf4j
public class GestionCreServiceImpl implements GestionCreServices {

	
	private ProduitRepository produitRepository;
	
	private RisqueRepository risqueRipository;
private SenarioStressRepository senarioStresRepository;
private ImpayeRepository impayeRepository;


	//ad produit
	
	@Override
	public Produit addtoProduit(Produit produit) {
	   Produit p = produitRepository.save(produit);
	return p;
	}



	@Override
	public ResponseEntity<Produit> updateProduit( Produit produit)throws ResourceNotFoundException {
		
		Optional<Produit> produitsByid = produitRepository.findById(produit.getMAIN_PRODUC_DESC());
		if(produitsByid.isEmpty()) {
			return ResponseEntity.notFound().build();
		}else {
			Produit produitset = produitsByid.get();
			produitset.setMAIN_PRODUC_DESC(produit.getMAIN_PRODUC_DESC());
			produitset.setGL_DESCRIPTION(produit.getGL_DESCRIPTION());
			produitset.setGL_SUBHEAD(produit.getGL_SUBHEAD());
		produitset.setPRODUCT_CODE(produit.getPRODUCT_CODE());
			produitset.setPRODUCT_CODE_DESC(produit.getPRODUCT_CODE_DESC());
			produitset.setEngagementPro(produit.getEngagementPro());
		produitRepository.save(produitset);
		return ResponseEntity.noContent().build();
		}
	}
	
	@Override
	public List<Produit> getAllProduit() {
		List<Produit> allProduct= new ArrayList<Produit>();
		allProduct = produitRepository.findAll();
		return allProduct;
	}



	@Override
	public Optional<Produit> findById(String id) {		
		return produitRepository.findById(id);
	
	}




	@Override
	public Risque addtoRisque(Risque risque) {
		return  risqueRipository.save(risque);
	}



	@Override
	public ResponseEntity<Risque> updateRisque( Risque risque) {
		Optional<Risque> risqueByid = risqueRipository.findById(risque.getId());
		if(risqueByid.isEmpty()) {
			return ResponseEntity.notFound().build();
		}else {
			Risque risqueset = risqueByid.get();
			risqueset.setFINANCIAL_STATEMENT_DATE(risque.getFINANCIAL_STATEMENT_DATE());
			risqueset.setPD(risque.getPD());
		risqueset.setRISK_RATE(risque.getRISK_RATE());;
			risqueset.setEngagementList(risque.getEngagementList());
			risqueset.setSenarioStres(risque.getSenarioStres());
			risqueRipository.save(risqueset);
		return ResponseEntity.noContent().build();
		}
	}

	@Override
	public List<Risque> getAllRisque() {
	List<Risque>allrisque = new ArrayList<Risque>();
	allrisque = risqueRipository.findAll();
	return allrisque;
	}



	@Override
	public Optional<Risque> findByIdRisque(long id) {
		return risqueRipository.findById(id);
				
	}
	
//senario stress

	@Override
	public SenarioStre addtoSenario(SenarioStre senario) {
		return senarioStresRepository .save(senario);
		}



	@Override
	public List<SenarioStre> getAllsenario() {
		List<SenarioStre>listsenar=  new ArrayList<SenarioStre>();
		listsenar=senarioStresRepository.findAll();
		return listsenar;
	}



	@Override
	public Optional<SenarioStre> findByIdSenario(long id) {
		 Optional<SenarioStre> senarioById = senarioStresRepository.findById(id);
		return senarioById;
	}



	@Override
	public ResponseEntity<SenarioStre> updateSenario(SenarioStre senario) {
		Optional<SenarioStre> senarioByid = senarioStresRepository.findById(senario.getSenario_id());
		if(senarioByid.isEmpty()) {
			return ResponseEntity.notFound().build();
		}else {
			SenarioStre senarioset = senarioByid.get();
			senarioset.setRisque_name(senario.getRisque_name());
			senarioset.setRisquestres(senario.getRisquestres());
			
			senarioStresRepository.save(senarioset);
		return ResponseEntity.noContent().build();
		}
	}


	
	///impaye////////////

	@Override
	public Impaye addtoImaye(Impaye impaye) {
		
		impayeRepository.save(impaye);
		
		  Impaye impayenex = new Impaye();
		  
		  long days = new Date().getTime()- impaye.getDEFAULT_DATE().getTime(); 
		  float resultat = days/(1000*60*60*24); 
		  impayenex.setDPD(resultat); 
		  if(resultat< 90){ 
			 impayenex.setRESTRCUTRED_FLAG(true); 
			
		  impayenex.setRESTRUCTURED_DATE(new Date()) ;
		  }else if (resultat>=90) { 
			  impayenex.setRESCHEDULE_FLAG(true);
		  impayenex.setRESCHDULE_DATE(new Date());
		
		  
		  }
		  impayenex.setDEFAULT_DATE(impaye.getDEFAULT_DATE());
		return 	impayeRepository.save(impayenex);
		
	}



	@Override
	public List<Impaye> getallImapye() {
		List<Impaye> allimpaye = new ArrayList<Impaye>();
		allimpaye= impayeRepository.findAll();
		return allimpaye;
	}



	@Override
	public Optional<Impaye> findByIdImpaye(long id) {
		return impayeRepository.findById(id);

	}



	@Override
	public ResponseEntity<Impaye> updateImpaye(Impaye impaye) {
		Optional<Impaye> impayeByid = impayeRepository.findById(impaye.getId());
		if(impayeByid.isEmpty()) {
			return ResponseEntity.notFound().build();
		}else {
			
		
			
		return ResponseEntity.noContent().build();
		}
	}

//garantie

	@Override
	public Garantie addtoGarantie(Garantie garantie) {

		return null;
	}



	@Override
	public List<Garantie> getAllgarantie() {
		// TODO Auto-generated method stub
		return null;
	}



	@Override
	public Optional<Garantie> findByIdGarantie(long id) {
		// TODO Auto-generated method stub
		return null;
	}



	@Override
	public ResponseEntity<Garantie> updateGarantie(Garantie garantie) {
		// TODO Auto-generated method stub
		return null;
	}








}
