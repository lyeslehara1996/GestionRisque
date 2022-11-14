package Auth.Service;

import Auth.entities.PasswordResetToken;

public interface ResetPasswordToken {

	
	public PasswordResetToken findByToken(String token);
	public PasswordResetToken savePasswordResetToken(PasswordResetToken passwordResetToken);
}
