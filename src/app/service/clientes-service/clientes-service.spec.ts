import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesService } from './clientes-service';

describe('ClientesService', () => {
  let component: ClientesService;
  let fixture: ComponentFixture<ClientesService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesService],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
