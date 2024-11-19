import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundapageComponent } from './segundapage.component';

describe('SegundapageComponent', () => {
  let component: SegundapageComponent;
  let fixture: ComponentFixture<SegundapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundapageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegundapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
