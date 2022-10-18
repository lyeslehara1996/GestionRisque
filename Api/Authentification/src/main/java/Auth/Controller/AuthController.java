package Auth.Controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.fasterxml.jackson.databind.ObjectMapper;

import Auth.Filter.JwtUtils;
import Auth.Repository.RoleRepository;
import Auth.Repository.UserRepository;
import Auth.Service.ServiceImp.UserDetailsImp;
import Auth.entities.User;
import Authentification.Request.AuthRequest;
import Authentification.Request.JwtRefresh;
import Authentification.Request.JwtResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("/Auth")
@CrossOrigin("*")
@Slf4j
public class AuthController {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	JwtUtils jwtUtils;
	
	@Autowired
	UserDetailsImp userDetailsImp;
	
	
	
	@PostMapping("/signin")
	public ResponseEntity<JwtResponse> authenticateUser( @RequestBody AuthRequest authRequest) throws Exception {

		User usr = userRepository.getUserByUsername(authRequest.getUsername()); 
		if(usr.getUsername() == null || usr.getPassword() == null) {
			log.info(usr.getUsername()+"not fouund ");
			throw new Exception("User not found");
		}else {
			
	
				
				Authentication authentication = authenticationManager.authenticate(
						new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
				log.info(authRequest.getUsername());
				SecurityContextHolder.getContext().setAuthentication(authentication);
				String jwtAccessTocken = jwtUtils.generateJwtAccessToken(authentication);
//			String JwtRefreshToken = jwtUtils.generateJwtRefreshToken(authentication);
				UserDetailsImp userDetails = (UserDetailsImp) authentication.getPrincipal();		
				
				List<String> roles = userDetails.getAuthorities().stream()
						.map(item -> item.getAuthority())
						.collect(Collectors.toList());
				
				
				
				return  ResponseEntity.ok(new JwtResponse(jwtAccessTocken,userDetails.getUsername(),userDetails.getEmail(),roles));
				
			}
			}
		

	
//	@PostMapping("/RefreshToken")
//	public ResponseEntity<JwtResponse> RefreshingToken( HttpServletRequest request, HttpServletResponse response) throws Exception {
//	
//		String authToken =request.getHeader("Authorization");
//		if(authToken!=null && authToken.startsWith("Bearer ")) {
//			try {
//				String JwtRefreshToken = authToken.substring(7);
//				Algorithm algorithm = Algorithm.HMAC256(jwtUtils.jwtSecret.getBytes());
//				JWTVerifier jwtVerfier= JWT.require(algorithm).build();
//				DecodedJWT decodedJWT =jwtVerfier.verify(JwtRefreshToken);
//		String nom =decodedJWT.getSubject();
//		User appuser = userRepository.getUserByUsername(nom);
//		Authentication userAuth = SecurityContextHolder.getContext().getAuthentication();
//
//		String jwtAccessTocken =JWT.create().withSubject(appuser.getUsername()).
//				withExpiresAt(new Date(System.currentTimeMillis()+ 360* 60 * 1000)).
//				withIssuer(request.getRequestURI().toString())
//				.withClaim("roles", appuser.getRoles().stream().map(ga->ga.getName()).collect(Collectors.toList()))
//				.sign(algorithm); 
//		List<String> roles = appuser.getRoles().stream().map(ga->ga.getName()).collect(Collectors.toList());
//			return  ResponseEntity.ok(new JwtResponse(jwtAccessTocken,JwtRefreshToken,appuser.getUsername(),appuser.getEmail(),roles));
//	
//			}catch (Exception e) {
//			throw new RuntimeException("error tokens");
//				// TODO: handle exception
//			}
//			
//			
//		  	
//		}else{
//			throw new RuntimeException("refersh token required !!!") ;
//		}
//		}
//	
//	
}
