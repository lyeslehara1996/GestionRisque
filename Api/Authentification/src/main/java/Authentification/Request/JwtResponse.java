package Authentification.Request;

import java.util.List;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter  @Setter @Data @Component

public class JwtResponse {


	public JwtResponse(String jwtAccessTocken,  String username,String email,List<String> roles, List<String> privileges) {
		super();
		this.jwtAccessTocken = jwtAccessTocken;
		this.username = username;
		this.email=email;
		this.roles=roles;
		this.privileges = privileges;
	}
	private String jwtAccessTocken;
	private String username;
	private String email;
	private List<String> roles;
	private List<String> privileges;


}