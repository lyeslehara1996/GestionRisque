package Auth;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.UUID;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import Auth.Repository.RoleRepository;
import Auth.Repository.UserRepository;
import Auth.Service.AccountService;
import Auth.Service.RessourceService;
import Auth.entities.Agence;
import Auth.entities.Niveau;
import Auth.entities.Permissions;
import Auth.entities.Privilege;
import Auth.entities.Ressource;
import Auth.entities.Role;
import Auth.entities.User;
@SpringBootApplication

public class AuthentificationApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuthentificationApplication.class, args);
	}
	
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	

	@Bean
	CommandLineRunner start(AccountService accountService, RessourceService ressourceService, RepositoryRestConfiguration restConfiguration) {
		restConfiguration.exposeIdsFor(AuthentificationApplication.class);
		return args->{
			//	Create Role 
			
			Role role1=accountService.addNewRolle(new Role(null, "Admin",  new ArrayList<>(), new ArrayList<>(),new HashSet()));
			Role role2=accountService.addNewRolle(new Role(null, "Utilisateur",  new ArrayList<>(),new ArrayList<>(),new HashSet()));
			Role role3=accountService.addNewRolle(new Role(null, "Manager Risque ", new ArrayList<>(),new ArrayList<>(),new HashSet()));

			//Create agence
			Agence agence1 =  accountService.AddAgence(new Agence(null, "BNA", "l'agence de BNA", new ArrayList<>()));
			
////			//	Create User
			User user1=	accountService.addNewUser(new User(null,"Admin" ,"Admin" ,"Admin","admin@Risque.com","Admin1234",role1,agence1));
			
			User user2 =accountService.addNewUser(new User(null,"Lyes","Lehara","LyesLehara","ManagerRisque@Risque.com","User4",role1,null));
						
//			// creer un niveau 
			
			Niveau Niv_1 = accountService.AddNiveau(new Niveau(null, "niveau1",1,role1));
			Niveau Niv_2 = accountService.AddNiveau(new Niveau(null, "niveau2",2,role1));
			
			//creer agence 
			
			
//			
////			//	Create Privileges 
////			
			Privilege p1 = ressourceService.createPrivilegeIfNotFound(new Privilege(null, "Saisir", "Effectuer Un ajout ", new ArrayList()));
			Privilege p2 = ressourceService.createPrivilegeIfNotFound(new Privilege(null, "Consulter", "Consulter, voir  ",new ArrayList()));
			Privilege p3 = ressourceService.createPrivilegeIfNotFound(new Privilege(null, "Editer", "Modification ", new ArrayList()));
			Privilege p4 = ressourceService.createPrivilegeIfNotFound(new Privilege(null, "Supprimer", "La suppression ",new ArrayList()));
			Privilege p5 = ressourceService.createPrivilegeIfNotFound(new Privilege(null, "Rechercher", "La Recherche ",new ArrayList()));
			Privilege p6 = ressourceService.createPrivilegeIfNotFound(new Privilege(null, "Valider", "La Validation ",new ArrayList()));
			Privilege p7 = ressourceService.createPrivilegeIfNotFound(new Privilege(null, "Lancer", "Lancement ",new ArrayList()));
			
//			//			ressource 
			
			Ressource r1 = ressourceService.CreateRessource(new Ressource(null, "Rapport", "Ressource liee a un rapport",new ArrayList()));
			Ressource r2 = ressourceService.CreateRessource(new Ressource(null, "User", "Ressource liee a un utilisateur",new ArrayList()));
			Ressource r4 = ressourceService.CreateRessource(new Ressource(null, "Donnee", "Ressource liee aux donnees",new ArrayList()));
			
			
			//			Permissions
			
			Permissions per1 = ressourceService.createPermissions(new Permissions(p1,r1,p1.getNameP()+r1.getName()));
			Permissions per2 = ressourceService.createPermissions(new Permissions(p2,r2,p2.getNameP()+r2.getName()));
			Permissions per3 = ressourceService.createPermissions(new Permissions(p5,r1,p5.getNameP()+r1.getName()));
			Permissions per4 = ressourceService.createPermissions(new Permissions(p6,r2,p6.getNameP()+r2.getName()));
			
//			//Add Permission to roles 
////			
//			
			ressourceService.PrermissionsToRoles(role1.getId(), per2.getId());
			ressourceService.PrermissionsToRoles(role1.getId(), per1.getId());
			ressourceService.PrermissionsToRoles(role1.getId(), per3.getId());
			ressourceService.PrermissionsToRoles(role2.getId(), per1.getId());
	
		};
	}

}
