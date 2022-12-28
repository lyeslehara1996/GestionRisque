package Auth.Controller;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import Auth.Repository.AgenceRepository;
import Auth.Repository.RestPasswordTokenRepository;
import Auth.Repository.RoleRepository;
import Auth.Repository.UserRepository;
import Auth.Service.AccountService;
import Auth.Service.MailService;
import Auth.Service.ResetPasswordToken;
import Auth.entities.Agence;
import Auth.entities.Mail;
import Auth.entities.Niveau;
import Auth.entities.PasswordResetToken;
import Auth.entities.Permissions;
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
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private RoleRepository roleRepo;
	
	@Autowired
	private AgenceRepository ageneceRepo;
	@Autowired
	private ResetPasswordToken restpasswordTokenSer;
	@Autowired
	private MailService mailService;
	
	@GetMapping("/user")
//	@PreAuthorize("hasAuthority('ConsulterUser')")
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
	
	@GetMapping("/user/{id_user}")

	public ResponseEntity<User> getUserById(@PathVariable Long id_user){
		try {
			User user = accountService.getUserById(id_user);
			if (user == null) {
		        return new ResponseEntity("L'Utilisateur n'existe pas",HttpStatus.NO_CONTENT);
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

@GetMapping("/role/{id_role}")

public ResponseEntity<Role> getRoleById(@PathVariable Long id_role){
	try {
		Role role = accountService.getRoleById(id_role);
		if (role == null) {
	        return new ResponseEntity("Le role n'existe pas",HttpStatus.NO_CONTENT);
	      }else {
		
		return new ResponseEntity(role, HttpStatus.ACCEPTED);
	      }
		
	} catch (Exception e) {
		// TODO: handle exception
		 return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
		
}
@GetMapping("/agence/{id_agence}")

public ResponseEntity<Agence> getAgenceById(@PathVariable Long id_agence){
	try {
		Agence agence = accountService.getAgenceByID(id_agence);
		if (agence == null) {
	        return new ResponseEntity("L'agence n'existe pas",HttpStatus.NO_CONTENT);
	      }else {
		
		return new ResponseEntity(agence, HttpStatus.ACCEPTED);
	      }
		
	} catch (Exception e) {
		// TODO: handle exception
		 return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
		
}
@GetMapping("/niveau/{id_niv}")

public ResponseEntity<Niveau> getNiveauById(@PathVariable Long id_niv){
	try {
		Niveau niveau = accountService.getNiveauById(id_niv);
		if (niveau == null) {
	        return new ResponseEntity("Le niveau n'existe pas",HttpStatus.NO_CONTENT);
	      }else {
		
		return new ResponseEntity(niveau, HttpStatus.ACCEPTED);
	      }
		
	} catch (Exception e) {
		// TODO: handle exception
		 return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
		
}
	
	 @RequestMapping(value = "/users/save", method = RequestMethod.POST)
	public ResponseEntity<User> saveUser(HttpServletRequest request,@RequestBody User user){
		 try {
				accountService.addNewUser(user);
				String token = UUID.randomUUID().toString();
				PasswordResetToken passwordResetToken = new PasswordResetToken();
				passwordResetToken.setToken(token);
				passwordResetToken.setUser(user);
				passwordResetToken.setExpiryDate(LocalDateTime.now().plusHours(1));
				restpasswordTokenSer.savePasswordResetToken(passwordResetToken);
				
				  Mail mail = new Mail();
			        mail.setFrom("Intervalle-Technologies.com");
			        mail.setTo(user.getEmail());
			        mail.setSubject("Reset your password");

			        Map<String, Object> model = new HashMap<>();
			        model.put("token", token);
			        model.put("Username", user.getUsername());
			        model.put("Email", user.getEmail());
			        model.put("expiryDate", passwordResetToken.getExpiryDate());
			        
			        String url = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort();
			        String resetPasswordLink = "http://localhost:4200/ResetPassword/" + passwordResetToken.getToken();
				       
			        
			        model.put("Link", resetPasswordLink);
			       
			        mail.setModel(model);
			        mailService.send(mail);
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
	
	
	@PutMapping("/user/update/{id_user}")
	public ResponseEntity<User> UpdateUser(@PathVariable Long id_user, @RequestBody User user ){
	try {
		
		Optional<User> UserData = userRepo.findById(id_user);
		
		if(UserData.isPresent()) {
			return  new ResponseEntity<>(accountService.UpdateUser(id_user, user), HttpStatus.CREATED);
		}else {
			 return new ResponseEntity("l'utilisateur n'existe pas ",HttpStatus.NOT_FOUND);
		}
		
	} catch (Exception e) {
		e.printStackTrace();
		return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
}
	@PutMapping("/role/update/{id_role}")
	public ResponseEntity<User> UpdateUser(@PathVariable Long id_role, @RequestBody Role role ){
	try {
		
		Optional<Role> RoleData = roleRepo.findById(id_role);
		
		if(RoleData.isPresent()) {
			return  new ResponseEntity(accountService.UpdateRole(id_role, role), HttpStatus.CREATED);
		}else {
			 return new ResponseEntity("le role n'existe pas ",HttpStatus.NOT_FOUND);
		}
		
	} catch (Exception e) {
		e.printStackTrace();
		return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
}
	
	@PutMapping("/agence/update/{id_agence}")
	public ResponseEntity<Agence> UpdateAgence(@PathVariable Long id_agence, @RequestBody Agence agence ){
	try {
		
		Optional<Agence> AgenceData = ageneceRepo.findById(id_agence);
		
		if(AgenceData.isPresent()) {
			return  new ResponseEntity(accountService.UpdateAgence(id_agence, agence), HttpStatus.CREATED);
		}else {
			 return new ResponseEntity("cette Agence n'existe pas ",HttpStatus.NOT_FOUND);
		}
		
	} catch (Exception e) {
		e.printStackTrace();
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
