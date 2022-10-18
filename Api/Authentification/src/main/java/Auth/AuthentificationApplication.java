package Auth;

import java.util.ArrayList;
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
import Auth.entities.Privilege;
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
			
			accountService.addNewRolle(new Role(null, "Admin",new ArrayList<>()));
			accountService.addNewRolle(new Role(null, "Utilisateur",new ArrayList<>()));
			accountService.addNewRolle(new Role(null, "Manager Risque ",new ArrayList<>()));
			accountService.addNewRolle(new Role(null, "Analyste Risque ",new ArrayList<>()));
			accountService.addNewRolle(new Role(null, "Contrôleur  ",new ArrayList<>()));
			accountService.addNewRolle(new Role(null, "Viewer ",new ArrayList<>()));
			
			//	Create User
			accountService.addNewUser(new User(null,"Admin","admin@Risque.com","Admin1234",new ArrayList<>()));
			accountService.addNewUser(new User(null,"LyesLehara","ManagerRisque@Risque.com","User4",new ArrayList<>()));
			accountService.addNewUser(new User(null,"User12345","Utilisateur@Risque.com","User1",new ArrayList<>()));
			accountService.addNewUser(new User(null,"Utilisateur3","Anyliste@Risque.com","User2",new ArrayList<>()));
			accountService.addNewUser(new User(null,"Oussama","Controller@Risque.com","User3",new ArrayList<>()));
			accountService.addNewUser(new User(null,"Utilisateur5","Viwer@Risque.com","User5",new ArrayList<>()));
			accountService.addNewUser(new User(null,"Teyeb","Utilisateur@Risque.com","User6",new ArrayList<>()));
			accountService.addNewUser(new User(null,"Utilisateur7","Utilisateur@Risque.com","User7",new ArrayList<>()));

			//			Add Role to User

			accountService.addRolleToUser("Admin", "Admin");
			accountService.addRolleToUser("LyesLehara", "Manager Risque");
			accountService.addRolleToUser("User12345", "Utilisateur");
			accountService.addRolleToUser("Utilisateur3", "Analyste Risque");
			accountService.addRolleToUser("Oussama", "Contrôleur");
			accountService.addRolleToUser("Utilisateur5", "Viewer");
			accountService.addRolleToUser("Teyeb", "Utilisateur");
			accountService.addRolleToUser("Utilisateur7", "Utilisateur");
			
			//	Create Privileges
			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanAddUser", "Ajouter_des_Utilisateurs "));
			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanReadUser", "Consulter_des_Utilisateurs "));
			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanUpdateUser", "Modifier_des_Utilisateurs "));
			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanDeleteUser", "Supprimer_des_Utilisateurs "));
			
			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanAddRoles", "Ajouter_des_Roles "));
			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanReadRoles", "Consulter_des_Roles "));
			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanUpdateRoles", "Modifier_des_Roles "));
			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanDeleteRoles", "Supprimer_des_Roles "));
			
//			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanAddRoles", "Ajouter_des_Roles "));
//			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanReadRoles", "Consulter_des_Roles "));
//			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanUpdateRoles", "Modifier_des_Roles "));
//			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanDeleteRoles", "Supprimer_des_Roles "));
//			
			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanAddRolesToUser", "Ajouter_des_Roles_To_User "));
			
			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanAddPrivileges", "Ajouter_des_Privileges "));
			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanReadPrivileges", "Ajouter_des_Privileges "));
			
			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanAddDATA", "Ajouter_des_DATA "));
			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanReadDATA", "Consulter_des_DATA "));
			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanUpdateDATA", "Modifier_des_DATA "));
			ressourceService.createPrivilegeIfNotFound(new Privilege(null, "CanDeleteDATA", "Supprimer_des_DATA "));
			
			
			//	Create Ressource
			
			
			//	Add Privilege to ressource 
			
			
			//	Add privilege to roles 
			
			ressourceService.addPrivilegesToRoles("Admin","CanAddUser");
			ressourceService.addPrivilegesToRoles("Admin","CanReadUser");
			ressourceService.addPrivilegesToRoles("Admin","CanUpdateUser");
			ressourceService.addPrivilegesToRoles("Admin","CanDeleteUser");
			
			ressourceService.addPrivilegesToRoles("Admin","CanAddRoles");
			ressourceService.addPrivilegesToRoles("Admin","CanReadRoles");
			ressourceService.addPrivilegesToRoles("Admin","CanUpdateRoles");
			ressourceService.addPrivilegesToRoles("Admin","CanDeleteRoles");
			
			ressourceService.addPrivilegesToRoles("Admin","CanAddDATA");
			ressourceService.addPrivilegesToRoles("Admin","CanReadDATA"); 
			ressourceService.addPrivilegesToRoles("Admin","CanUpdateDATA");
			ressourceService.addPrivilegesToRoles("Admin","CanDeleteDATA");
			
			ressourceService.addPrivilegesToRoles("Manager Risque","CanReadUser");
			ressourceService.addPrivilegesToRoles("Manager Risque","CanUpdateUser");
			ressourceService.addPrivilegesToRoles("Manager Risque","CanReadRoles");
			ressourceService.addPrivilegesToRoles("Manager Risque","CanUpdateRoles");
			
			
			ressourceService.addPrivilegesToRoles("Analyste Risque","CanAddDATA");
			ressourceService.addPrivilegesToRoles("Analyste Risque","CanReadDATA"); 
			ressourceService.addPrivilegesToRoles("Analyste Risque","CanUpdateDATA");
			ressourceService.addPrivilegesToRoles("Analyste Risque","CanDeleteDATA");

			ressourceService.addPrivilegesToRoles("Contrôleur","CanReadRoles");
			
			ressourceService.addPrivilegesToRoles("Viewer","CanReadUser");
			ressourceService.addPrivilegesToRoles("Viewer","CanReadRoles"); 
			ressourceService.addPrivilegesToRoles("Viewer","CanReadRoles");
			ressourceService.addPrivilegesToRoles("Viewer","CanDeleteRoles");
			
			
			ressourceService.addPrivilegesToRoles("Utilisateur","CanReadUser");
			ressourceService.addPrivilegesToRoles("Utilisateur","CanUpdateUser");
		};
	}

}
