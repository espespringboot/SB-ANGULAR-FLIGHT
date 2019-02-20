package com.Sample.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Solicitud_Vuelo {


	@Id 
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "id")
	private Long id;	
	
	public Solicitud_Vuelo(Long id) {
		this.id = id;
	}
	
	@Column(name = "nombre")
    private String nombre;

    @Column(name = "dia_vuelo")
    private String dia_vuelo;

    @Column(name = "destino")
    private String destino;

    @Column(name = "fecha_solicitud")
    private String fecha_solicitud;

    @Column(name = "status")
    private String status;

	public Solicitud_Vuelo(String nombre, String dia_vuelo, String destino, String fecha_solicitud, String status) {
		this.nombre = nombre;
		this.dia_vuelo = dia_vuelo;
		this.destino = destino;
		this.fecha_solicitud = fecha_solicitud;
		this.status = status;
	}

    public Solicitud_Vuelo() {
    	
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDia_vuelo() {
		return dia_vuelo;
	}

	public void setDia_vuelo(String dia_vuelo) {
		this.dia_vuelo = dia_vuelo;
	}

	public String getDestino() {
		return destino;
	}

	public void setDestino(String destino) {
		this.destino = destino;
	}

	public String getFecha_solicitud() {
		return fecha_solicitud;
	}

	public void setFecha_solicitud(String fecha_solicitud) {
		this.fecha_solicitud = fecha_solicitud;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Solicitud_Vuelo [id=" + id + ", nombre=" + nombre + ", dia_vuelo=" + dia_vuelo + ", destino=" + destino
				+ ", fecha_solicitud=" + fecha_solicitud + ", status=" + status + "]";
	}

    
}
