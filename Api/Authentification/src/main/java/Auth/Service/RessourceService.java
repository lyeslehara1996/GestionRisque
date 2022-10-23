package Auth.Service;

import java.util.Optional;

import Auth.entities.Privilege;
import Auth.entities.Ressource;

public interface RessourceService {
	
	
	
	Privilege createPrivilegeIfNotFound (Privilege Privilege_Name) throws Exception;
	void addPrivilegesToRoles(String name, String PrivilegeName);
	Ressource CreateRessource(Ressource ressource) throws Exception;
	void addPrivilegeToRessource(String name, String Privilege_Name) throws Exception;
}
