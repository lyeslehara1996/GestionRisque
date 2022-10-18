package Auth.Service.ServiceImp;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonIgnore;

import Auth.entities.Privilege;
import Auth.entities.Role;
import Auth.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Service 
public class UserDetailsImp implements UserDetails{
	private Long id;

	private String username;

	@JsonIgnore
	private String password;
	
	private String email;

	private Collection<? extends GrantedAuthority> authorities;
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return authorities;
	}
	
	public static UserDetailsImp build(User user) {

        Collection<GrantedAuthority> authorities = new HashSet<>();

        for (Role roole : user.getRoles()) {
            for (Privilege privileges : roole.getPrivileges()) {
                authorities.add(new SimpleGrantedAuthority(privileges.getNameP()));
            }
        }
		
//		List<GrantedAuthority> authorities = user.getRoles().stream()
//				.map(roles -> new SimpleGrantedAuthority(roles.getName()))
//				.collect(Collectors.toList());

		return new UserDetailsImp(
				user.getId(), 
				user.getUsername(), 
				user.getPassword(), 
				user.getEmail(),
				authorities);
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
