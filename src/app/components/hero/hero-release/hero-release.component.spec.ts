import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroReleaseComponent } from './hero-release.component';

describe('HeroReleaseComponent', () => {
  let component: HeroReleaseComponent;
  let fixture: ComponentFixture<HeroReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroReleaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
