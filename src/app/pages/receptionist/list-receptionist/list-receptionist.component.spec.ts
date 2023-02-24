import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReceptionistComponent } from './list-receptionist.component';

describe('ListReceptionistComponent', () => {
  let component: ListReceptionistComponent;
  let fixture: ComponentFixture<ListReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReceptionistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
