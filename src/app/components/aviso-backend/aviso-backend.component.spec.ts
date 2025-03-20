import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoBackendComponent } from './aviso-backend.component';

describe('AvisoBackendComponent', () => {
  let component: AvisoBackendComponent;
  let fixture: ComponentFixture<AvisoBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisoBackendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisoBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
