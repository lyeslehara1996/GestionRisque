package Auth.Service;

import java.util.Optional;

import Auth.entities.Privilege;
import Auth.entities.Ressource;

public interface RessourceService {
	
	
	
	Privilege createPrivilegeIfNotFound (Privilege privilege) throws Exception;
	void addPrivilegesToRoles(String name, String nameP);
	Ressource CreateRessource(Ressource ressource) throws Exception;
	void addPrivilegeToRessource(String name, String nameP) throws Exception;
}
