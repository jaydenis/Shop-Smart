import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLoaderComponent } from './pre-loader.component';

describe('PreLoaderComponent', () => {
  let component: PreLoaderComponent;
  let fixture: ComponentFixture<PreLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreLoaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('closes after the initial loading delay', () => {
    jasmine.clock().install();
    try {
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('#preloader').classList.contains('done')).toBeFalse();

      jasmine.clock().tick(800);

      expect(fixture.nativeElement.querySelector('#preloader').classList.contains('done')).toBeTrue();
    } finally {
      jasmine.clock().uninstall();
    }
  });
});
