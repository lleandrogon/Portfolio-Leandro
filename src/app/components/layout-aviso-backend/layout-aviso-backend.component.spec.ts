import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAvisoBackendComponent } from './layout-aviso-backend.component';

describe('LayoutAvisoBackendComponent', () => {
  let component: LayoutAvisoBackendComponent;
  let fixture: ComponentFixture<LayoutAvisoBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutAvisoBackendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutAvisoBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
