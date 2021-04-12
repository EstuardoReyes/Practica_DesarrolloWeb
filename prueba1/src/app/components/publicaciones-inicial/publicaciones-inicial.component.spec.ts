import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesInicialComponent } from './publicaciones-inicial.component';

describe('PublicacionesInicialComponent', () => {
  let component: PublicacionesInicialComponent;
  let fixture: ComponentFixture<PublicacionesInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesInicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
