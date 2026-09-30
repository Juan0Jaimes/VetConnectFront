import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { GetUserDto, User } from './vetconnect.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    pageSize: number = 10;
    user : GetUserDto;


    constructor(public router: Router){}
    
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      // Obtén el token de autenticación de tu sistema de autenticación
      
      this.user = JSON.parse(localStorage.getItem('user')!);

      const authToken =  this.user == null ? "" :this.user.token;

      // Clona la solicitud y agrega el encabezado Bearer
      const authReq = req.clone({
        setHeaders: { Authorization: `Bearer ${authToken}` }
      });

      // Pasa la solicitud clonada con el encabezado Bearer al siguiente manejador
      return next.handle(authReq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            localStorage.clear();
            // Sesión expirada, redirige a la página de inicio de sesión
            this.router.navigate(['/authentication/logout']);
          }
          return throwError(error);
        })
      );
  }
}
