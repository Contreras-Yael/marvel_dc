import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBuilderComponentComponent } from './team-builder-component.component';

describe('TeamBuilderComponentComponent', () => {
  let component: TeamBuilderComponentComponent;
  let fixture: ComponentFixture<TeamBuilderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamBuilderComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamBuilderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
