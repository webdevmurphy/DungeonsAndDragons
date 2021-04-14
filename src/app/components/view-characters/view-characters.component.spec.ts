import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCharactersComponent } from './view-characters.component';

describe('ViewCharactersComponent', () => {
  let component: ViewCharactersComponent;
  let fixture: ComponentFixture<ViewCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
