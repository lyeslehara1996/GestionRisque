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

import Auth.Repository.AgenceRepository;
import Auth.Repository.PrivilegeRepository;
import Auth.Repository.RoleRepository;
import Auth.Repository.UserRepository;
import Auth.Repository.niveauRepository;
import Auth.Service.AccountService;
import Auth.entities.Agence;
import Auth.entities.Niveau;
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
	
	@Autowired
	private niveauRepository niveauRepo;
	
	@Autowired
	private AgenceRepository agenceRepo;
	
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
	public Agence AddAgence(Agence agence) throws Exception {
		// TODO Auto-generated method stub
		Agence agenceName = agenceRepo.findByAgenceName(agence.getAgenceName());
		if(agenceName != null ) {
			throw new Exception("L'agence existe deja");
		}else {
			return agenceRepo.save(agence);
		}
		
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




	@Override
	public List<Agence> AllAgence() {
		// TODO Auto-generated method stub
		return agenceRepo.findAll();
	}




	@Override
	public void DeleteUser(Long id_user) throws Exception{
		// TODO Auto-generated method stub
		User user = userRepository.getUserById(id_user);
		
		if(user ==null) {
			throw new Exception("Utilisateur not found ");
		}else {
			userRepository.deleteById(id_user);
		}
		
	}




	@Override
	public void DeleteRole(Long id_Role) throws Exception {
		// TODO Auto-generated method stub
	Role role = roleRepository.getRoleById(id_Role);
		
		if(role ==null) {
			throw new Exception("Role not found ");
		}else {
			roleRepository.deleteById(id_Role);
		}
		
	}
		
	@Override
	public void DeleteAgence(Long id_Agence) throws Exception {
		// TODO Auto-generated method stub
		Agence agence = agenceRepo.getAgenceById(id_Agence);
		
		if(agence ==null) {
			throw new Exception("Role not found ");
		}else {
			roleRepository.deleteById(id_Agence);
		}
	}




	@Override
	public Niveau AddNiveau(Niveau niveau) throws Exception {
		// TODO Auto-generated method stub
		return niveauRepo.save(niveau);
	}




	@Override
	public List<Niveau> AllNiveau() {
		// TODO Auto-generated method stub
		return niveauRepo.findAll();
	}




	@Override
	public void DeleteNiveau(Long id_Niveau) throws Exception {
		// TODO Auto-generated method stub
		Niveau niveau = niveauRepo.findNiveauByIdNiv(id_Niveau);
		
		if(niveau ==null) {
			throw new Exception("Niveau not found ");
		}else {
			niveauRepo.deleteById(id_Niveau);
		}
	}

	
}
