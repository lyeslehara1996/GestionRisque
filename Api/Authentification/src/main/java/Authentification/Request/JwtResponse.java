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

	public JwtResponse(String jwtAccessTocken,String JwtRefreshToken, String username,String email, List<String> permissions) {
		super();
		this.jwtAccessTocken = jwtAccessTocken;
this.JwtRefreshToken=JwtRefreshToken;
		this.username = username;
		this.email=email;
		this.permissions = permissions;
	}
	private String jwtAccessTocken;
	private String JwtRefreshToken;
	private String username;
	private String email;
	private List<String> permissions;


}