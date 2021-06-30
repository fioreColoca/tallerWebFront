import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurarPasswordComponentComponent } from './restaurar-password-component.component';

describe('RestaurarPasswordComponentComponent', () => {
  let component: RestaurarPasswordComponentComponent;
  let fixture: ComponentFixture<RestaurarPasswordComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurarPasswordComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurarPasswordComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
