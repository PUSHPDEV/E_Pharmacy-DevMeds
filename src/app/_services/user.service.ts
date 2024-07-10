import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  pathOfApi = "http://localhost:8080"

  requestHeader = new HttpHeaders(
    { "No-Auth": "True" }
  );
  constructor(private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) { }

  

  public register(registerData: any) {
    return this.httpclient.post(this.pathOfApi + '/registerNewUser', registerData);
  }



  public login(loginData: any) {
    return this.httpclient.post(this.pathOfApi + "/authenticate", loginData, {
       headers: this.requestHeader 
      });
  }

  public forUser() {
    return this.httpclient.get(this.pathOfApi + '/forUser', {
      responseType: 'text',
    });
  }

  public forAdmin() {
    return this.httpclient.get(this.pathOfApi + '/forAdmin', {
      responseType: 'text',
    });
  }

  // 

  public roleMatch(allowedRoles: string | any[]): boolean {
    let isMatch = false;
    const userRoles: any  = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } 
          // else {
          //   return isMatch;
          // }
        }
      }
    }
    return isMatch;
  }
}
