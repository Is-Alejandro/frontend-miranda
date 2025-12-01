import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarBoletoComponent } from './registrar-boleto.component';

describe('RegistrarBoletoComponent', () => {
  let component: RegistrarBoletoComponent;
  let fixture: ComponentFixture<RegistrarBoletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarBoletoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarBoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
