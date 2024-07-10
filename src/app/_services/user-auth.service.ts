import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {




  constructor() { }
  public setRoles(roles: []) {
    localStorage.setItem("roles", JSON.stringify(roles));
  }
  public getRoles(): [] {
    // return JSON.parse(localStorage.getItem('roles'));
    const rolesString = localStorage.getItem('roles');
    return rolesString ? JSON.parse(rolesString) : [];
  }
  public setToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken);
  }
  public getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }
  // This function will clear the local storage
  public clear() {
    localStorage.clear();
  }
  // return true or false when the user is logged in
  public isLoggedIn() {

    return this.getRoles() && this.getToken();
  }
  public isAdmin() {
    const roles: any[] = this.getRoles();
    return roles[0].roleName === 'Admin';
  }

  public isUser() {
    const roles: any[] = this.getRoles();
    return roles[0].roleName === 'User';
  }
}
