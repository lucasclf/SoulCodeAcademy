import { TestBed } from '@angular/core/testing';

import { JogoDaVelhaService } from './jogos.service';

describe('JogoDaVelhaService', () => {
  let service: JogoDaVelhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogoDaVelhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
