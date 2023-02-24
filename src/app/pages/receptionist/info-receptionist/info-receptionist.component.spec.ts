import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReceptionistComponent } from './info-receptionist.component';

describe('InfoReceptionistComponent', () => {
  let component: InfoReceptionistComponent;
  let fixture: ComponentFixture<InfoReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoReceptionistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
