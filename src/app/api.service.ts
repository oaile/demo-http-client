import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Headers, Response, URLSearchParams } from '@angular/http';

import { environment } from '../environments/environment';

@Injectable()
export class ApiService {
  user : UserResponse;

  constructor(private http:HttpClient) { }

  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    headersConfig['Authorization'] = 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTE5MTQsInVzZXJuYW1lIjoib2FpbGUiLCJleHAiOjE1MTEyMDUxMDZ9.ASyZycrw9a2EQThWRCGuW_qXOPQYekaNDRFD16kUP_M';
    // if (this.jwtService.getToken()) {
    //   headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
    // }
    return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: any) {
    return Observable.throw(error);
 }

  get(path: string): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { headers: this.setHeaders()})
    .catch(this.formatErrors)
    .map((res: Response) => res);
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map((res: Response) => res);
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map((res: Response) => res);
  }


}
