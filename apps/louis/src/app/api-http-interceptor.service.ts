import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpInterceptor implements HttpInterceptor {
  public readonly baseUrl: string;
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v0';
    if (navigator.userAgent.toLowerCase().includes('electron/')) {
      this.baseUrl = this.baseUrl.replace(':3000', ':54321');
    }
  }
  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req.clone({url: `${this.baseUrl}${req.url}`}));
  }
}
