import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBoletosComponent } from './listar-boletos.component';

describe('ListarBoletosComponent', () => {
  let component: ListarBoletosComponent;
  let fixture: ComponentFixture<ListarBoletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarBoletosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
