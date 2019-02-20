import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { HttpClientModule } from '@angular/common/http';
import { SolicitudesListaComponent } from './solicitudes-lista/solicitudes-lista.component';
import{ AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudesComponent,
    SolicitudesListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
