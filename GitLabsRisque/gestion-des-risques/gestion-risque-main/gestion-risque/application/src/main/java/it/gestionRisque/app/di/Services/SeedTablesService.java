package it.gestionRisque.app.di.Services;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Future;

import javax.transaction.Transactional;

import org.apache.poi.ss.usermodel.DateUtil;
import org.hibernate.annotations.Synchronize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import it.gestionRisque.app.Entities.Client;
import it.gestionRisque.app.Entities.Compte;
import it.gestionRisque.app.Entities.Engagement;
import it.gestionRisque.app.Entities.Impaye;
import it.gestionRisque.app.Repositories.ClientRepository;
import it.gestionRisque.app.Repositories.EngagementRepository;
import lombok.AllArgsConstructor;


@Service
@Transactional
public class SeedTablesService {
	
	
	private ExcelToJsonService uploadService;	
	
	@Autowired
	private ClientService clientService;
	@Autowired
	private EngagementsService engagementsService;
	@Autowired
	private CompteService compteService;
	
	@Autowired
	private ClientRepository clientRepository;
	@Autowired
	private EngagementRepository engagementRepository;
	
	
	SeedTablesService( ExcelToJsonService uploadService){
		this.uploadService=uploadService;
		
	}
	
	
	public void addToTables(MultipartFile file) throws Exception {
		List<Client> clientList = new ArrayList<Client>();
		List<Engagement> engagementList = new ArrayList<Engagement>();
		List<Compte> compteList = new ArrayList<Compte>();
		List<Impaye> impayeList = new ArrayList<Impaye>();
		
		//String fileName = "E:/v2/Risk-Management/src/main/resources/static/exemples.xlsx";
		
		List<Map<String, String>> data = uploadService.upload(file);
		 
		List<String> existingClient = new ArrayList<String>();
		List<String> existingCompte = new ArrayList<String>();
		 
		 if (data!=null && data.size() > 0 ) {
			 
			 Double reportingDateDouble =  Double.parseDouble(data.get(0).get("REPORTING_DATE"));
			 Date javaDate = DateUtil.getJavaDate((double) reportingDateDouble);
			 String ReportingDate =  new SimpleDateFormat("yyyy-MM-dd").format(javaDate);
			 
			 for(Map<String, String> element : data) {
				  
				 String clientObligorId =  element.get("OBLIGOR_ID");
				 String accountNumber = element.get("ACCOUNT_NUMBER");
				 
				 if (clientObligorId!=null && clientObligorId!=""  ) { 
					if( !(existingClient.contains(clientObligorId)) ){
					  clientList.add(Client.clientFromJSON(element));
					  existingClient.add(clientObligorId);
				 }
				 if (!(existingCompte.contains(accountNumber))) {
					 compteList.add(Compte.compteFromJSON(element));
					 existingCompte.add(accountNumber);
				 }
				 
				 engagementList.add(Engagement.engagementFromJSON(element));
				 }
				 //impayeList.add(Impaye.impayeFromJSON(element));
				 
			 }
			  mySavingMethods(clientList, engagementList, compteList);
			  allEngagementByClient(ReportingDate);

//			  clientService.saveAllClients(clientList);
//			  engagementsService.saveAllEngagements(engagementList);
//            compteService.saveAllCompte(compteList);
//			  
			 
			 
			  
              
//            impayeService.saveAllImpaye(impayeList);
			
		 }
	}
	
	
	@Transactional
	 public void mySavingMethods(List<Client> clientList, List<Engagement> engagementList , List<Compte> compteList){
		clientService.saveAllClients(clientList);
		engagementsService.saveAllEngagements(engagementList);
        compteService.saveAllCompte(compteList);
	 }
	
	//yasmiiiiiiiiiiiiiiiine

	public void allEngagementByClient(String reportingDate) {
	
		//Map<String, Double> mapsold= new HashMap();
		Collection<Engagement>getengagement = engagementRepository.findAllEngagementClient(reportingDate);
		//List<Client >clientlis =  new ArrayList<Client>();
		//clientlis=	clientRepository.findAll();
		Double  x_Leasing= null;
		Double  x_Islamic= null;
		Double  x_Part_20700_20710= null;
		Double  x_Pca= null;
		Double  x_getNominalExposure= null;
	
		for(Engagement eng :getengagement){
			//for(Client cl:clientlis){
				//if(eng.getClient().getReportingDate(). equals(cl.getReportingDate())) {
					
					if(eng.getLeasing()== null) {
						  x_Leasing = 0D;  
					  } else {
						  x_Leasing= eng.getLeasing();
					  } 	  
					if(eng.getIslamic()== null) {
						  x_Islamic = 0D;  
					  }else {
						  x_Islamic=eng.getIslamic();
					  }
					if(eng.getPart_20700_20710()== null) {
						  x_Part_20700_20710 = 0D;  
					  }
					  else {
						  x_Part_20700_20710= eng.getPart_20700_20710();
					  }
					  if(eng.getPca()== null) {
						  x_Pca = 0D;  
					  }else {
						  x_Pca =eng.getPca();
						  
					  }
					  if(eng.getNominalExposure()== null) {
						  x_getNominalExposure = 0D;  
					  }else {
						  x_getNominalExposure =eng.getNominalExposure();
					  }
					  
						Double soldB =	x_Leasing+x_Islamic+  x_Part_20700_20710+  x_Pca+x_getNominalExposure;
						if(eng.getClient().getSoldeBalance()== null) {
							eng.getClient().setSoldeBalance(soldB);
						} else {
							eng.getClient().setSoldeBalance(soldB + eng.getClient().getSoldeBalance());
						}
						
						
						//mapsold.put(eng.getClient().getObligoreId(),soldB);
						//System.out.println("MAPSOLD ---------> "+ mapsold);
			
//				  for (Map.Entry<String, Double> mapClient : mapsold.entrySet()) {
//						clientlis.forEach(clt->{
//							if (mapClient.getKey()==clt.getObligoreId()) {
//								clt.setSoldeBalance(mapClient.getValue());
//							}
//						});
//				  }				
				
		     //}
	     //}
		}
		
	}
	
 }

//List<Map<String, String>> existingEngagement = new ArrayList<Map<String,String>>();

//Map<String, String> engagementCheckMap = new HashMap<String, String>(); 				 
//engagementCheckMap.put("customerType", element.get("CUSTOMER_TYPE"));
//engagementCheckMap.put("tag", element.get("DEFAULT_FLAG_MAIN"));


//if(!(existingEngagement.stream().anyMatch(val -> val.equals(engagementCheckMap) ))) 
//if(!(existingEngagement.contains(engagementCheckMap)))
//{
//	 
//	 existingEngagement.add(engagementCheckMap);
//}
