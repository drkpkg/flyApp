import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReceptionistComponent } from './new-receptionist.component';

describe('NewReceptionistComponent', () => {
  let component: NewReceptionistComponent;
  let fixture: ComponentFixture<NewReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReceptionistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
