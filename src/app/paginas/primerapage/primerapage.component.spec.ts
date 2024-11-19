import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerapageComponent } from './primerapage.component';

describe('PrimerapageComponent', () => {
  let component: PrimerapageComponent;
  let fixture: ComponentFixture<PrimerapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimerapageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimerapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
