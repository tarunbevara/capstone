import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
import { Integration } from './integration';


@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private integrator: Integration) { }
  key!: String;
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.integrator.user.subscribe(data => { this.key = data.accesstoken; }
    );
    const modifiedurl = req.clone({ headers: req.headers.append('Authorization', 'JWT ' + this.key) });
    return next.handle(modifiedurl);
  }
}
