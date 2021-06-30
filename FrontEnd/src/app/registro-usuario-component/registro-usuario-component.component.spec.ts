import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUsuarioComponentComponent } from './registro-usuario-component.component';

describe('RegistroUsuarioComponentComponent', () => {
  let component: RegistroUsuarioComponentComponent;
  let fixture: ComponentFixture<RegistroUsuarioComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroUsuarioComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroUsuarioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
