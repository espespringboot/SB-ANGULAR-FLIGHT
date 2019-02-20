import { Component, OnInit } from '@angular/core';
import { SolicitudVueloService } from '../solicitud-vuelo.service';
import { Solicitud_Vuelo } from '../solicitud_vuelo';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  svuelo: Solicitud_Vuelo = new Solicitud_Vuelo();
  submitted = false;

  constructor(private SolicitudVueloService: SolicitudVueloService) { }

  ngOnInit() {
  }

  newS(): void {
    this.submitted = false;
    this.svuelo = new Solicitud_Vuelo();
  }

  save() {
    this.SolicitudVueloService.create(this.svuelo)
      .subscribe(data => console.log(data), error => console.log(error));
    this.svuelo = new Solicitud_Vuelo();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
