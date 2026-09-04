import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenariosComponent } from './scenarios.component';

describe('ScenariosComponent', () => {
  let component: ScenariosComponent;
  let fixture: ComponentFixture<ScenariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScenariosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders all four scenarios and their detailed rules', () => {
    expect(component.scenarios.length).toBe(4);
    expect(fixture.nativeElement.querySelectorAll('.scenario-card').length).toBe(4);
    expect(fixture.nativeElement.textContent).toContain('Hacking the System');
    expect(fixture.nativeElement.textContent).toContain('Campaign Reward');
  });
});
