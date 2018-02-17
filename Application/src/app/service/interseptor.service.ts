import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpHeaderResponse,
  HttpProgressEvent, HttpUserEvent, HttpResponse, HttpSentEvent
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';

@Injectable()
export class InterseptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent |
    HttpResponse<any> | HttpUserEvent<any>> {
    const hostUrl = environment.url;
    console.log(`before change : ${req.url}`);
    const cloneURL = req.clone({ url: `${hostUrl}${req.url}` });
    console.log(`after change : ${cloneURL.url}`);
    return next.handle(cloneURL);
  }
}
