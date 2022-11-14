package Auth.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import Auth.entities.PasswordResetToken;

@RepositoryRestResource
public interface RestPasswordTokenRepository extends JpaRepository<PasswordResetToken, Long> {

	@Query(value = "SELECT * FROM password_reset_token WHERE token = ?1 AND expiry_date > NOW() AND used = 0 ", nativeQuery = true)
	public Boolean checkUserToken(String token);
	
	public PasswordResetToken findByToken(String token);
}
