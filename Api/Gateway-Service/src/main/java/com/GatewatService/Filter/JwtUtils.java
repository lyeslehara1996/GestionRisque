package com.GatewatService.Filter;

import java.security.Key;
import java.util.Date;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.apache.commons.codec.digest.HmacAlgorithms;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;


@Component

public class JwtUtils {
	private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);
	

	public final static String jwtSecret = "secret12309";
	public static final  String AUTH_HEADER = "Authorization";
	public static final  String PREFIX = "Bearer ";
	public static final  long EXCPIRE_ACCESS_TOKEN =1*60*1000;
	public static final long EXCPIRE_refersh_TOKEN = 15*60*1000;
	

    private Key Key;
    
	@PostConstruct
    public void init(){
        this.Key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    }

    public Claims getAllClaimsFromToken(String token) {
        return Jwts.parserBuilder().setSigningKey(Key).build().parseClaimsJws(token).getBody();
    }

    private boolean isTokenExpired(String token) {
        return this.getAllClaimsFromToken(token).getExpiration().before(new Date());
    }

    public boolean isInvalid(String token) {
        return this.isTokenExpired(token);
    }

	}