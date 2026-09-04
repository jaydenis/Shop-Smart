import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaBlockComponent } from './cta-block.component';

describe('CtaBlockComponent', () => {
  let component: CtaBlockComponent;
  let fixture: ComponentFixture<CtaBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
