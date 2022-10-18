package Auth.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import Auth.entities.Privilege;
import Auth.entities.Ressource;

@RepositoryRestResource
public interface PrivilegeRepository extends JpaRepository<Privilege, Long>  {

	public Privilege getPrivilegeBynameP(String nameP);

	
}
