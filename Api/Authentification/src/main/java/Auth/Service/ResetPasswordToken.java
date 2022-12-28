package Auth.Service;

import Auth.entities.PasswordResetToken;
import Auth.entities.User;

public interface ResetPasswordToken {

	
	
	public PasswordResetToken findByToken(String token);
	
	public PasswordResetToken savePasswordResetToken(PasswordResetToken passwordResetToken);
	
	public String validatePasswordResetToken(String token);
	
	public boolean isTokenFound(PasswordResetToken passToken);
	
	public boolean isTokenExpired(PasswordResetToken passToken);
	

	public boolean isTokenUsed(PasswordResetToken passToken);

	
	public boolean isTokenValidAndNotUsed(String token);
}
