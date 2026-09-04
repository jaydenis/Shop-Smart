import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export interface AppHttpError {
  status: number;
  message: string;
  cause: HttpErrorResponse;
}

export const httpErrorInterceptor: HttpInterceptorFn = (request, next) =>
  next(request).pipe(
    catchError((error: unknown) => {
      const response = error instanceof HttpErrorResponse ? error : null;
      const message =
        response?.status === 0
          ? 'The service is unavailable. Check your connection and try again.'
          : response?.status === 404
            ? 'The requested resource could not be found.'
            : response?.status && response.status >= 500
              ? 'The service encountered an error. Try again shortly.'
              : 'The request could not be completed.';

      const appError: AppHttpError = {
        status: response?.status ?? 0,
        message,
        cause: response ?? new HttpErrorResponse({ error, status: 0 }),
      };
      return throwError(() => appError);
    }),
  );
