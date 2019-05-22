import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,
  BehaviorSubject
}                     from 'rxjs';

import { map }        from 'rxjs/operators';
import { User }       from '../_models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject  : BehaviorSubject<User>;
  public currentUser          : Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser        = this.currentUserSubject.asObservable();
  }

  login(email:string, password:string):Observable<any> {
    let url = environment.apiUrl + 'login';
    return this.http.post<any>(url,{email,password}).pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.data.api_token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user.data));
          console.log(user.data.api_token);

        }

        return user;
    }));
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
