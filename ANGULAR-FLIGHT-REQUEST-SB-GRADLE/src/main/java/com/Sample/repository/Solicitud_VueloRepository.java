package com.Sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Sample.Entity.Solicitud_Vuelo;

public interface Solicitud_VueloRepository extends JpaRepository<Solicitud_Vuelo,Long> {
	
}
