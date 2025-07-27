import { inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { environments } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BusinessService {
    http: HttpClient = inject(HttpClient);

    registerBusiness (name: string, email: string, password: string): Observable<any> {
        const data = {name, email, password};
        return this.http.post(`${environments.API_BASE_URL}/businesses/create-business`, data);
    }

    loginBusiness (email: string, password: string): Observable<any> {
        const data = {email, password};
        return this.http.post(`${environments.API_BASE_URL}/businesses/login-business`, data, {
            withCredentials: true
        });
    }

    logoutBusiness (): Observable<any> {
        return this.http.get(`${environments.API_BASE_URL}/businesses/logout-business`, {
            withCredentials: true
        });
    }

    async isBusinessLoggedIn () {
        const response = await fetch(`${environments.API_BASE_URL}/businesses/isloggedin-business`, {
            credentials: 'include'
        });
        const isLoggedIn = await response.json();

        return isLoggedIn;
    }

    getBusinessById (id: string): Observable<any> {
        return this.http.get(`${environments.API_BASE_URL}/businesses/get-business/${id}`);
    }

    updateBusiness (id: string /* Default For Now TODO::  */, tagline: string, description?: string, address?: string): Observable<any> {
        const data = { tagline, description, address };
        return this.http.patch(`${environments.API_BASE_URL}/businesses/update-business/${id}`, data);
    }

    getLoggedInBusiness (): Observable<any> {
        return this.http.get(`${environments.API_BASE_URL}/businesses/get-loggedin-business`, {
            withCredentials: true
        });
    }
}