package com.nationsApp.nationsHome.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nationsApp.nationsHome.Country;
import com.nationsApp.nationsHome.CountryStats;
import com.nationsApp.nationsHome.Language;
import com.nationsApp.nationsHome.NationsMapper;
import com.nationsApp.nationsHome.RegionsStats;

import jakarta.websocket.server.PathParam;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/nations")
public class NationsController {

	@Autowired
	private final NationsMapper nationMapper;

    public NationsController(NationsMapper nationMapper) {
        this.nationMapper = nationMapper;
    }
    
    @GetMapping("")
    public List<Country> getAllCountries() {
        return nationMapper.getAllCountries();
    }
    
    @GetMapping("/{id}")
    public List<Language> getAllLanguages(@PathVariable int id) {
        return nationMapper.listLanguages(id);
    }
    
  
    @GetMapping("/stats")
    public List<CountryStats> getAllStats(){
    	return nationMapper.listStats();
    }
    
    @GetMapping("/regionStats")
    public List<RegionsStats> getAllRegionsStats(){
    	return nationMapper.listRegionsStats();
    }
    
    
	
}
