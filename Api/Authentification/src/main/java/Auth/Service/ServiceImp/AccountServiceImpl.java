 package Auth.Service.ServiceImp;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import Auth.Repository.PrivilegeRepository;
import Auth.Repository.RoleRepository;
import Auth.Repository.UserRepository;
import Auth.Service.AccountService;
import Auth.entities.Privilege;
import Auth.entities.Role;
import Auth.entities.User;
import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@Slf4j
public class AccountServiceImpl  implements AccountService{

	@Autowired
	private RoleRepository roleRepository;
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder  passwordEncoder;
	
	private PrivilegeRepository privilegeRepository;
	
	public AccountServiceImpl(RoleRepository roleRepository, UserRepository userRepository) {
		super();
		this.roleRepository = roleRepository;
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}




	@Override
	public User addNewUser(User user) {
		// TODO Auto-generated method stub
		String Pws  =user.getPassword();
		user.setPassword(passwordEncoder.encode(Pws));
		return userRepository.save(user);
	}

	@Override
	public Role addNewRolle(Role role) {
		// TODO Auto-generated method stub
		return roleRepository.save(role);
	}



	@Override
	public void addRolleToUser(@RequestBody String username, String name) {
		User user =userRepository.getUserByUsername(username);
		Role role =roleRepository.getRolesByName(name);
		user.getRoles().add(role);
		System.out.println(user.getRoles());
		log.info("i attribute role {} to user {}",user.getUsername(),role.getName());
		
	}
	@Override
	public List<User> ListUsers() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}


	@Override
	public User getUser(String username) {
		// TODO Auto-generated method stub
		return userRepository.getUserByUsername(username);
	}


	



	@Override
	public List<Role> ListRoles() throws Exception {
		// TODO Auto-generated method stub
		List<Role>   role = roleRepository.findAll();
		if(role == null ) {
			throw new Exception("La liste des roles est vide ");
			
		}
		return roleRepository.findAll();
	}

	
}
