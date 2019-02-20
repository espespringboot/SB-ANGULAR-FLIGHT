package com.Sample.DAO;

import java.util.Map;

import org.springframework.stereotype.Repository;

import com.Sample.Entity.Solicitud_Vuelo;

@Repository
public class Solicitud_VueloDAO {

	private static Map<Integer, Solicitud_Vuelo> s_vuelos;

}
