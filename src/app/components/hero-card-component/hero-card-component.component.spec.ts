import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCardComponentComponent } from './hero-card-component.component';

describe('HeroCardComponentComponent', () => {
  let component: HeroCardComponentComponent;
  let fixture: ComponentFixture<HeroCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
