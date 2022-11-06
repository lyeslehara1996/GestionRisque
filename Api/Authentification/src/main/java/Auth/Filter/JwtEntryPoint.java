package Auth.Filter;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

@Component
public class JwtEntryPoint implements AuthenticationEntryPoint {
	private static final Logger logger = LoggerFactory.getLogger(JwtEntryPoint.class);

	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException authException) throws IOException, ServletException {
		
		
		logger.error("Unauthorized error: {}", authException.getMessage());
		
		 response.setContentType(MediaType.APPLICATION_JSON_VALUE);
	        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
	        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Error: Unauthorized");
		
	}

}
