import {TestBed} from '@angular/core/testing';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {ApiHttpInterceptor} from './api-http-interceptor.service';

describe('test ApiHttpInterceptor', () => {
  let service: ApiHttpInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true}]
    });
  });

  it('should be created', (): void => {
    expect.assertions(1);
    service = TestBed.inject(ApiHttpInterceptor);
    expect(service).toBeDefined();
  });
  it('set baseUrl', (): void => {
    expect.assertions(1);
    service = TestBed.inject(ApiHttpInterceptor);
    expect(service.baseUrl).toStrictEqual('http://localhost:3000/api/v0');
  });
  it('is run in Electron', (): void => {
    expect.assertions(1);
    Object.defineProperty(navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) '
        + 'louis/0.0.0 Chrome/78.0.3904.130 Electron/7.1.14 Safari/537.36'
    });
    service = TestBed.inject(ApiHttpInterceptor);
    expect(service.baseUrl).toStrictEqual('http://localhost:54321/api/v0');
  });
});
