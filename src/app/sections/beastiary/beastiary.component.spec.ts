import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeastiaryComponent } from './beastiary.component';

describe('BeastiaryComponent', () => {
  let component: BeastiaryComponent;
  let fixture: ComponentFixture<BeastiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeastiaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeastiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders every hostile from the roster', () => {
    expect(component.hostileGroups).toHaveSize(3);
    expect(fixture.nativeElement.querySelectorAll('.threat')).toHaveSize(18);
  });
});
