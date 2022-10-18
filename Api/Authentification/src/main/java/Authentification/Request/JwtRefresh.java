package Authentification.Request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JwtRefresh {
	private String jwtAccessTocken;
	private String JwtRefreshToken;
	private String username;

}
