import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarRecordatorioComponent } from './asignar-recordatorio.component';

describe('AsignarRecordatorioComponent', () => {
  let component: AsignarRecordatorioComponent;
  let fixture: ComponentFixture<AsignarRecordatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignarRecordatorioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarRecordatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
