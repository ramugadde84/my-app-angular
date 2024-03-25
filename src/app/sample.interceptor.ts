import { HttpInterceptorFn } from '@angular/common/http';

export const sampleInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Interceptor");
  return next(req);
};
