import { Component, OnInit } from '@angular/core';
import { SolicitudVueloService } from '../solicitud-vuelo.service';
import { Solicitud_Vuelo } from '../solicitud_vuelo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-solicitudes-lista',
  templateUrl: './solicitudes-lista.component.html',
  styleUrls: ['./solicitudes-lista.component.css']
})
export class SolicitudesListaComponent implements OnInit {

  svuelos: Observable<Solicitud_Vuelo[]>; 
  constructor(private SolicitudVueloService: SolicitudVueloService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.svuelos = this.SolicitudVueloService.getList();
  }
}
