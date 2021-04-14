import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFilesComponent } from './view-files.component';

describe('ViewFilesComponent', () => {
  let component: ViewFilesComponent;
  let fixture: ComponentFixture<ViewFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
