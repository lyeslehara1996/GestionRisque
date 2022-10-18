package Auth.Controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import Auth.Service.RessourceService;
import Auth.Service.ServiceImp.RessourceServiceImp;
import Auth.entities.Privilege;
import Auth.entities.Ressource;
import lombok.Data;

@RestController
@RequestMapping("/api")
public class RessourceController {

	@Autowired
	private RessourceService ressService;
	
	
	@PostMapping("/privilege/save")
	public ResponseEntity<Privilege> savePrivileges(@RequestBody Privilege privilege){
		URI uri =URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/privilege/save").toUriString());
		try {
			return ResponseEntity.created(uri).body(ressService.createPrivilegeIfNotFound(privilege));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok().build();
	}
	
	@PostMapping("/Ressource/save")
	public ResponseEntity<Ressource> saveRessource(@RequestBody Ressource ressource){
		URI uri =URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/privilege/save").toUriString());
		try {
			return ResponseEntity.created(uri).body(ressService.CreateRessource(ressource));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@PostMapping("/ressource/addPrivilegesToRessource")
	public ResponseEntity<?> addPrivilegesToRoles(@RequestBody PrivilegesToRessource formPrivilegeRessource){
		try {
			ressService.addPrivilegeToRessource(formPrivilegeRessource.getName(), formPrivilegeRessource.getNameP());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok().build();
	}

}
@Data
class PrivilegesToRessource{
	String name;
	String nameP;
}