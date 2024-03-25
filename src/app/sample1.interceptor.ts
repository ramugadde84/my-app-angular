import { HttpInterceptorFn } from '@angular/common/http';

export const sample1Interceptor: HttpInterceptorFn = (req, next) => {
  console.log("Sample1 interceptor");
  return next(req);
};
