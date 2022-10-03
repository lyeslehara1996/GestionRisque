package Auth;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import Auth.Repository.RoleRepository;
import Auth.Repository.UserRepository;
import Auth.Service.AccountService;
import Auth.entities.Role;
import Auth.entities.User;
@SpringBootApplication
@EnableEurekaClient
public class AuthentificationApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuthentificationApplication.class, args);
	}
	
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	

	@Bean
	CommandLineRunner start(AccountService accountService,  RepositoryRestConfiguration restConfiguration) {
		restConfiguration.exposeIdsFor(AuthentificationApplication.class);
		return args->{
			accountService.addNewRolle(new Role(null, "Admin"));
			accountService.addNewRolle(new Role(null, "Utilisateur"));
			accountService.addNewRolle(new Role(null, "Manager Risque "));
			accountService.addNewRolle(new Role(null, "Analyste Risque "));
			accountService.addNewRolle(new Role(null, "Contrôleur  "));
			accountService.addNewRolle(new Role(null, "Viewer "));
			
			
			accountService.addNewUser(new User(null,"Admin","admin",new ArrayList<>()));
			accountService.addNewUser(new User(null,"Utilisateur1","User4",new ArrayList<>()));
			accountService.addNewUser(new User(null,"Utilisateur2","User1",new ArrayList<>()));
			accountService.addNewUser(new User(null,"Utilisateur3","User2",new ArrayList<>()));
			accountService.addNewUser(new User(null,"Utilisateur4","User3",new ArrayList<>()));
			accountService.addNewUser(new User(null,"Utilisateur5","User5",new ArrayList<>()));
			accountService.addNewUser(new User(null,"Utilisateur6","User6",new ArrayList<>()));
			accountService.addNewUser(new User(null,"Utilisateur7","User7",new ArrayList<>()));
//			

			accountService.addRolleToUser("Admin", "Admin");
			accountService.addRolleToUser("Utilisateur1", "Manager Risque");
			accountService.addRolleToUser("Utilisateur2", "Utilisateur");
			accountService.addRolleToUser("Utilisateur3", "Analyste Risque");
			accountService.addRolleToUser("Utilisateur4", "Contrôleur");
			accountService.addRolleToUser("Utilisateur5", "Viewer");
			accountService.addRolleToUser("Utilisateur6", "Utilisateur");
			accountService.addRolleToUser("Utilisateur7", "Utilisateur");
		};
	}

}
