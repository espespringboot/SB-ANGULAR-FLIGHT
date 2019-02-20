package com.Sample.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.Sample.Entity.Solicitud_Vuelo;
import com.Sample.Service.Solicitud_VueloService;

@Controller
public class Solicitud_VueloController {

	@Autowired
	Solicitud_VueloService solicitud_vueloservice;
	
	@CrossOrigin("http://localhost:4200")
	@RequestMapping(value = "/s_vuelo", method = RequestMethod.GET)		
	@ResponseBody
	public Object index(){ 
		return solicitud_vueloservice.findAll();
	}
	 @CrossOrigin("http://localhost:4200")
	 @RequestMapping(value = "/create", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)	  
	  @ResponseBody
	 
	  public String create(@RequestBody Solicitud_Vuelo solicitud_vuelo) {
		  String userId = "";
	    try {	    
	    	solicitud_vueloservice.save(solicitud_vuelo);
	      userId = String.valueOf(solicitud_vuelo.getId());
	    }
	    catch (Exception ex) {
	      return "Error creating the user: " + ex.toString();
	    }
	    return "User succesfully created with id = " + userId;
	  }

	  @RequestMapping("/delete/{id}")
	  @ResponseBody
	  public String delete(@PathVariable long id) {
	    try {
	    	Solicitud_Vuelo solicitud_vuelo = solicitud_vueloservice.findById(id);
	    	solicitud_vueloservice.delete(solicitud_vuelo);
	    }
	    catch (Exception ex) {
	      return "Error deleting the Solicitud:" + ex.toString();
	    }
	    return "Solicitud succesfully deleted!";
	  }
	  
	  @RequestMapping("/update/{id}")
	  @ResponseBody
	  public String updateSolicitud_Vuelo(@RequestBody Solicitud_Vuelo solicitud_vuelo,@PathVariable Long id) {
		try {
	    	solicitud_vuelo.setId(id);
	    	solicitud_vueloservice.save(solicitud_vuelo);
	    }
	    catch (Exception ex) {
	      return "Error updating the solicitud: " + ex.toString();
	    }
	    return "Solicitud succesfully updated!";
	  }
	  
	  @RequestMapping("/get-by-id")
	  @ResponseBody
	  public String getById(Long id) {
	    String userId = "";
	    try {
	    	Solicitud_Vuelo solicitud_vuelo = solicitud_vueloservice.findById(id);
	        userId = String.valueOf(solicitud_vuelo.getId());
	    }
	    catch (Exception ex) {
	      return "User not found";
	    }
	    return "The user id is: " + userId;
	  }
	  
}
