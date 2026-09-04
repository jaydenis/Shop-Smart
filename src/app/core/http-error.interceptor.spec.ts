import { HttpClient, HttpErrorResponse, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AppHttpError, httpErrorInterceptor } from './http-error.interceptor';

describe('httpErrorInterceptor', () => {
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withInterceptors([httpErrorInterceptor])), provideHttpClientTesting()],
    });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('normalizes server errors for callers', () => {
    const request = TestBed.inject(HttpClient).get('/api/test');
    request.subscribe({
      error: (error: AppHttpError) => {
        expect(error.status).toBe(500);
        expect(error.message).toContain('service encountered an error');
        expect(error.cause).toBeInstanceOf(HttpErrorResponse);
      },
    });
    http.expectOne('/api/test').flush({}, { status: 500, statusText: 'Server Error' });
  });
});
