import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHerComponent } from './detalle-her.component';

describe('DetalleHerComponent', () => {
  let component: DetalleHerComponent;
  let fixture: ComponentFixture<DetalleHerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleHerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleHerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
