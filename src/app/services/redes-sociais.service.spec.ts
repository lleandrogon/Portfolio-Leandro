import { TestBed } from '@angular/core/testing';

import { RedesSociaisService } from './redes-sociais.service';

describe('RedesSociaisService', () => {
  let service: RedesSociaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedesSociaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
