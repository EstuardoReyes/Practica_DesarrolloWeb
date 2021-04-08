import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAprComponent } from './cursos-apr.component';

describe('CursosAprComponent', () => {
  let component: CursosAprComponent;
  let fixture: ComponentFixture<CursosAprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosAprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosAprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
