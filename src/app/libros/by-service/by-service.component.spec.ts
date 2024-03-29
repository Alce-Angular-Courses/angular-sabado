import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByServiceComponent } from './by-service.component';
import { HttpClientModule } from '@angular/common/http';

describe('ByServiceComponent', () => {
  let component: ByServiceComponent;
  let fixture: ComponentFixture<ByServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByServiceComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
