package Auth.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import Auth.entities.Privilege;

@RepositoryRestResource
public interface PrivilegeRepository extends JpaRepository<Privilege, Long>  {

	public Privilege getPrivilegeBynameP(String nameP);
}