package Auth.Service;

import java.util.List;

import Auth.entities.Role;
import Auth.entities.User;

public interface AccountService {

	User addNewUser(User user);
	Role addNewRolle (Role role);
	void addRolleToUser(String username, String name);
	List<User> ListUsers();
	User getUser(String username);
}
