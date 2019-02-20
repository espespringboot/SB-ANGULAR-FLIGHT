import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesListaComponent } from './solicitudes-lista.component';

describe('SolicitudesListaComponent', () => {
  let component: SolicitudesListaComponent;
  let fixture: ComponentFixture<SolicitudesListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
