import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, of } from "rxjs";
import { delay, tap, map } from "rxjs/operators";

interface Usertoken {
  username: string,
  token: string
}
interface SimulatedResponse {
  loginStatus: 'OK' | 'ERROR',
  usertoken?: Usertoken,
  errorMessage?: string
}

const BodySimulatedResponseLoginOK: SimulatedResponse = {
  loginStatus: 'OK',
  usertoken: {
    username: 'master8@lemoncode.net',
    token: '12345678'
  }
};

const BodySimulatedResponseLoginERROR: SimulatedResponse = {
  loginStatus: 'ERROR',
  errorMessage: 'Invalid Credentials'
};

const ResponseLoginOk$: Observable<SimulatedResponse> = Observable.create(
  emmitter => {emmitter.next(BodySimulatedResponseLoginOK); emmitter.complete()}
).pipe(delay(1000));

const ResponseLoginERROR$: Observable<SimulatedResponse> = Observable.create(
  emmitter => {emmitter.next(BodySimulatedResponseLoginERROR); emmitter.complete()}
).pipe(delay(1000));

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usertoken: Usertoken;
  private lastLoginErrorMessage: string;

  constructor(private http: HttpClient) {
    this.usertoken = {
      username: '',
      token: ''
    };
    this.lastLoginErrorMessage = null;
  }

  login(user: {username: string, password: string}): Observable<boolean> {

    if (user.username === 'master8@lemoncode.net' && user.password === '12345678') {
      return ResponseLoginOk$.pipe(
        map(
          respuesta => {
            this.usertoken = respuesta.usertoken;
            this.lastLoginErrorMessage = null;
            localStorage.setItem('username',respuesta.usertoken.username);
            localStorage.setItem('token', respuesta.usertoken.token);
            return true;
          })
      );
    } else {
      return ResponseLoginERROR$.pipe(
        map(
          respuesta => {
            this.lastLoginErrorMessage = respuesta.errorMessage;
            return false;
          }
        )
      );
    }
  }

  logout(): Observable<boolean> {
    this.usertoken = {
      username: '',
      token: ''
    };
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    return of(true);
  }

  isLogged(): Observable<boolean> {
    if (localStorage.getItem('token')) {
      return of(true);
    } else {
      return of(false);
    }
  }

  getLastLoginErrorMessage(): string {
    return this.lastLoginErrorMessage;
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setUsername(username: string) {
    return of(true).pipe(
      delay(1000),
      tap( () => {
        localStorage.setItem('username',username);
      })
    );
  }

}