package Auth.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import Auth.entities.Role;


@RepositoryRestResource
public interface RoleRepository extends JpaRepository<Role, Long> {

	//public Roles getRoleByRoleName(String name);
	public Role getRolesByName(String name);
}
