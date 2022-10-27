package Auth.Controller;

import java.net.URI;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import Auth.Service.AccountService;
import Auth.entities.Agence;
import Auth.entities.Ressource;
import Auth.entities.Role;
import Auth.entities.User;
import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private AccountService accountService ;
	
	@GetMapping("/user")

	public ResponseEntity<List<User>> getUsers(){
		try {
			List<User> user = accountService.ListUsers();
			if (user.isEmpty()) {
		        return new ResponseEntity("Liste Users est null",HttpStatus.NO_CONTENT);
		      }else {
			
			return new ResponseEntity(user, HttpStatus.ACCEPTED);
		      }
			
		} catch (Exception e) {
			// TODO: handle exception
			 return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
			
	}
	
@GetMapping("/roles")
	public ResponseEntity<List<Role>> getRoles(){
	try {
		List<Role> role = accountService.ListRoles();
		if (role.isEmpty()) {
	        return new ResponseEntity("La liste des role est vide ",HttpStatus.NO_CONTENT);
	      }else {
		
		return new ResponseEntity(role, HttpStatus.ACCEPTED);
	      }
		
	} catch (Exception e) {
		// TODO: handle exception
		 return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
			
	}
	
	 @RequestMapping(value = "/users/save", method = RequestMethod.POST)
	public ResponseEntity<User> saveUser(@RequestBody User user){
		 try {
				accountService.addNewUser(user);
				return  new ResponseEntity(user, HttpStatus.CREATED);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return  new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
			}
	}
	
	@PostMapping("/roles/save")
	public ResponseEntity<Role> saveRoles(@RequestBody Role role){
		 try {
				accountService.addNewRolle(role);
				return  new ResponseEntity(role, HttpStatus.CREATED);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return  new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
			}
	}
	
	@PostMapping("/Agence/addAgence")
	public ResponseEntity<Agence>  AddAgence(@RequestBody Agence agence) throws Exception{
		 try {
				accountService.AddAgence(agence);
				return  new ResponseEntity(agence, HttpStatus.CREATED);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return  new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
			}
	}
	
	@GetMapping("/Agences")
	public ResponseEntity<List<Agence>> AllAgence(){
		try {
			List<Agence> agences = accountService.AllAgence();
			if (agences.isEmpty()) {
		        return new ResponseEntity("Liste Agences est null",HttpStatus.NO_CONTENT);
		      }else {
			
			return new ResponseEntity(agences, HttpStatus.ACCEPTED);
		      }
			
		} catch (Exception e) {
			// TODO: handle exception
			 return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
			
	}
	
	@DeleteMapping("/user/delete/{id_user}")
	public ResponseEntity<?> DeleteUser(@PathVariable Long id_user){
		 try {
			accountService.DeleteUser(id_user);
			 return new ResponseEntity("User Deleted", HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);	
			}
	}
	
	@DeleteMapping("/role/delete/{id_Role}")
	public ResponseEntity<?> DeleteRole(@PathVariable Long id_Role){
		 try {
			accountService.DeleteRole(id_Role);
			 return new ResponseEntity("Role Deleted", HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/agence/delete/{id_Agence}")
	public ResponseEntity<?> DeleteAgence(@PathVariable Long id_Agence){
		 try {
			accountService.DeleteAgence(id_Agence);
			return new ResponseEntity("Agence Deleted", HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
