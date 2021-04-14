import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicitemsComponent } from './magicitems.component';

describe('MagicitemsComponent', () => {
  let component: MagicitemsComponent;
  let fixture: ComponentFixture<MagicitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
