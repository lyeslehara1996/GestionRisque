package Auth.Service.ServiceImp;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import Auth.Repository.PrivilegeRepository;
import Auth.Repository.RessourceRepository;
import Auth.Repository.RoleRepository;
import Auth.Service.RessourceService;
import Auth.entities.Privilege;
import Auth.entities.Ressource;
import Auth.entities.Role;

@Service
@Transactional
public class RessourceServiceImp  implements RessourceService{

	public RessourceServiceImp(RessourceRepository ressourcesRepo, PrivilegeRepository privilegeRepo, RoleRepository roleRepo) {
		super();
		this.ressourcesRepo = ressourcesRepo;
		this.privilegeRepo = privilegeRepo;
		this.roleRepo = roleRepo;
	}


	private RessourceRepository ressourcesRepo;
	
	private PrivilegeRepository privilegeRepo;
	
	private RoleRepository roleRepo;
	
	
	//Create a new privilege
	
	@Override
	public Privilege createPrivilegeIfNotFound(Privilege privilege) throws Exception {
		Privilege privilegeByName = privilegeRepo.getPrivilegeBynameP(privilege.getNameP());
		
		if(privilegeByName != null) {
			throw  new Exception("Le privilege dans le nom  "+privilege.getNameP()+"Existe deja creer un autre");
		}else {
			// TODO Auto-generated method stub
			return privilegeRepo.save(privilege);
		}
		
	    
	}
	
	// affecter des privilege a les roles 
	
	@Override
	public void addPrivilegesToRoles(@RequestBody String roleName, String nameP) {
		Role role =roleRepo.getRolesByName(roleName);
		Privilege privilege =privilegeRepo.getPrivilegeBynameP(nameP);
		role.getPrivileges().add(privilege);

	}



//Affecter des privileges a des ressources 
	@Override
	public void addPrivilegeToRessource(@RequestBody String name, String nameP) throws Exception{
		// TODO Auto-generated method stub
		Ressource ressource =ressourcesRepo.findRessourceByName(name);
		Privilege privilege =privilegeRepo.getPrivilegeBynameP(nameP);
		
		ressource.getPrivileges().add(privilege);
	}


	//Create a new ressource 
	
	@Override
	public Ressource CreateRessource(Ressource ressource) throws Exception{
		Ressource ressourceByName = ressourcesRepo.findRessourceByName(ressource.getName());
		
		if(ressourceByName != null) {
			throw  new Exception("Ressource existe deja !!");
		}else {
			// TODO Auto-generated method stub
			return ressourcesRepo.save(ressource);
		}
		
	}

}
