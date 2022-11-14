package Auth.Service;

import java.util.Collection;
import java.util.List;

import Auth.entities.Agence;
import Auth.entities.Niveau;
import Auth.entities.Privilege;
import Auth.entities.Role;
import Auth.entities.User;

public interface AccountService {

	User addNewUser(User user) throws Exception;
	List<User> ListUsers();
	User getUser(String username);
	User getUserByMail(String userEmail);
	User getUserById(Long id_user) throws Exception;
	void DeleteUser(Long id_user) throws Exception;
	User UpdateUser(Long id_user,User user) throws Exception;
	
	
	Role addNewRolle (Role role);
	List<Role> ListRoles() throws Exception;
	Role getRoleById(Long id_role);
	void DeleteRole(Long id_Role) throws Exception;
	Role UpdateRole(Long id_role, Role role) throws Exception;
	
	Agence AddAgence (Agence agence) throws Exception;
	List<Agence> AllAgence();
	Agence getAgenceByID(Long id_Agence);
	void DeleteAgence(Long id_Agence) throws Exception;
	Agence UpdateAgence(Long id_agence, Agence agence) throws Exception;
	
	
	Niveau AddNiveau (Niveau niveau) throws Exception;
	List<Niveau> AllNiveau();
	Niveau getNiveauById(Long id_Niv);
	void DeleteNiveau(Long id_Niveau) throws Exception;
//	Niveau UpdateNiveau();
	
	
	public void createPasswordResetTokenForUser(User user, String token);
}
