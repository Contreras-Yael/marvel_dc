import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCliComponent } from './hero-cli.component';

describe('HeroCliComponent', () => {
  let component: HeroCliComponent;
  let fixture: ComponentFixture<HeroCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
