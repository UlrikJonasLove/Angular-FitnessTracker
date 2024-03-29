import { Subject } from "rxjs";
import { type AuthData } from "./auth-data.model";
import { type User } from "./user.model";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable() // so we can inject other services
export class AuthService {
    authChange = new Subject<boolean>();
    private user?: User | null;

    constructor(private router: Router) {}

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.authSucess();
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.authSucess();
    }

    logout() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login'])
    }

    getUser() {
        return { ...this.user }; // making a new object to return the data, but not directly the user object
    }

    // will return true if user is authenticated
    isAuth() {
        return this.user != null;
    }

    private authSucess() {
        this.authChange.next(true);
        this.router.navigate(['/training'])
    }
}