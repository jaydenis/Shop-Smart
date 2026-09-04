import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewComponent } from './crew.component';

describe('CrewComponent', () => {
  let component: CrewComponent;
  let fixture: ComponentFixture<CrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders all crew members', () => {
    expect(fixture.nativeElement.querySelectorAll('.char-card').length).toBe(5);
  });

  it('opens and closes a dossier while restoring focus', () => {
    const trigger = fixture.nativeElement.querySelector('.char-card') as HTMLButtonElement;
    trigger.focus();
    trigger.click();
    fixture.detectChanges();

    expect(component.selectedMember?.name).toBe('MANAGER MIKE');
    expect(fixture.nativeElement.querySelector('[role="dialog"]')).toBeTruthy();

    component.closeModal();
    fixture.detectChanges();
    expect(component.selectedMember).toBeNull();
    expect(document.activeElement).toBe(trigger);
  });

  it('moves between crew members with arrow keys', () => {
    component.openModal(component.crew[0][1], new Event('click'));
    fixture.detectChanges();

    component.handleKeydown(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
    expect(component.selectedMember?.name).toBe('TECH SAM');
    component.handleKeydown(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    expect(component.selectedMember?.name).toBe('MANAGER MIKE');
  });
});
