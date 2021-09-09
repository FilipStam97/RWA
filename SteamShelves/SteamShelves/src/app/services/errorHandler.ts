import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from 'rxjs';


export const errorHandler = (error: HttpErrorResponse) => {
    const errMsg =
    error.status === 0 
      ? `Connection with the server failed ${error.error}`
      : `Server returned an error ${error.status}`;
  
    return throwError(errMsg);
    
  }