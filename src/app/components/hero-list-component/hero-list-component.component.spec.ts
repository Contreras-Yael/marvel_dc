import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListComponentComponent } from './hero-list-component.component';

describe('HeroListComponentComponent', () => {
  let component: HeroListComponentComponent;
  let fixture: ComponentFixture<HeroListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
