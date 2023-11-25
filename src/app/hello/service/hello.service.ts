import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  constructor(private http: HttpClient) {}

  sayHello(word: string): Observable<string> {
    return this.http.get('jaxrs-ng-web/api/v1/hello/' + word, {
      responseType: 'text',
    });
  }
}
