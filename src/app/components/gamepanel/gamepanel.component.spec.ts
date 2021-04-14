import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamepanelComponent } from './gamepanel.component';

describe('GamepanelComponent', () => {
  let component: GamepanelComponent;
  let fixture: ComponentFixture<GamepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamepanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
