import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUploadsComponent } from './view-uploads.component';

describe('ViewUploadsComponent', () => {
  let component: ViewUploadsComponent;
  let fixture: ComponentFixture<ViewUploadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUploadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
