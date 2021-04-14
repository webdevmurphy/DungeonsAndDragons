import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSessionDmviewComponent } from './game-session-dmview.component';

describe('GameSessionDmviewComponent', () => {
  let component: GameSessionDmviewComponent;
  let fixture: ComponentFixture<GameSessionDmviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSessionDmviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSessionDmviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
