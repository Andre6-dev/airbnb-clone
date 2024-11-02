import {HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";
import {tap} from "rxjs";

export const authExpired: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const authService = inject(AuthService);
  return next(req).pipe(
    tap({
      error: (err: HttpErrorResponse) => {
        // If the error status is 401 and the URL is not the login URL, then redirect to the login page
        // This is to handle the case where the user is logged in but the token has expired
        if (err.status === 401 && err.url && !err.url.includes("api/auth") && authService.isAuthenticated()) {
          authService.login();
        }
      }
    })
  )
}
