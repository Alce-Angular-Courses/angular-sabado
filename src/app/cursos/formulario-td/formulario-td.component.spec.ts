import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTdComponent } from './formulario-td.component';

describe('FormularioTdComponent', () => {
  let component: FormularioTdComponent;
  let fixture: ComponentFixture<FormularioTdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioTdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
