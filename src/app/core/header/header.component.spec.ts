import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Angular Sábados en CAS'`, () => {
    expect(component.title).toEqual('Angular Sábados en CAS');
  });

  it('should render title', () => {
    const render = fixture.nativeElement;
    fixture.detectChanges();
    expect(render.querySelector('h1').textContent).toContain('Angular');
  });

});


