package com.Sample.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Sample.Entity.Solicitud_Vuelo;
import com.Sample.repository.Solicitud_VueloRepository;

@Service
public class Solicitud_VueloService {

	@Autowired
	Solicitud_VueloRepository solicitud_vuelorepository;
	
	  public Object findAll(){
	        return solicitud_vuelorepository.findAll();
	    }

	    public Solicitud_Vuelo findById(Long id){
	        return solicitud_vuelorepository.findOne(id);
	    }

	    public Solicitud_Vuelo save(Solicitud_Vuelo solicitud_vuelo){
	        return solicitud_vuelorepository.save(solicitud_vuelo);
	    }

	    public void delete(Solicitud_Vuelo solicitud_vuelo){
	    	solicitud_vuelorepository.delete(solicitud_vuelo);
	    	return;
	    }
	    
	   
}
