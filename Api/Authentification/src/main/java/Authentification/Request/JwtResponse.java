package Authentification.Request;

import java.util.List;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter  @Setter @Data @Component

public class JwtResponse {

	//List<String> roles

	public JwtResponse(String jwtAccessTocken,String JwtRefreshToken, String Nom,String prenom ,String email, List<String> permissions) {
		super();
		this.jwtAccessTocken = jwtAccessTocken;
this.JwtRefreshToken=JwtRefreshToken;
		this.Nom = Nom;
		this.prenom=prenom;
		this.email=email;
		this.permissions = permissions;
	}
	private String jwtAccessTocken;
	private String JwtRefreshToken;
	private String Nom;
	private String prenom;
	private String email;
	private List<String> permissions;


}