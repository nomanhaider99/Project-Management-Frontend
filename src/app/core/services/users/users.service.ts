import { inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { environments } from "src/environments/environments";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    http: HttpClient = inject(HttpClient);
    router: Router = inject(Router);

    registerUser(username: string, email: string, password: string): Observable<any> {
        const data = { username, email, password };
        return this.http.post(`${environments.API_BASE_URL}/users/create-user`, data);
    }

    loginUser(email: string, password: string): Observable<any> {
        const data = { email, password };
        return this.http.post(`${environments.API_BASE_URL}/users/login-user`, data, {
            withCredentials: true
        });
    }

    updateUser(id: string, tagline: string, description?: string): Observable<any> {
        const data = { tagline, description };
        return this.http.patch(`${environments.API_BASE_URL}/users/update-user/${id}`, data, {
            withCredentials: true
        });
    }

    getUserById(id: string): Observable<any> {
        return this.http.get(`${environments.API_BASE_URL}/users/get-user/${id}`);
    }

    getUsersByIds(ids: string[]): Observable<any> {
        const data = { ids };
        return this.http.post(`${environments.API_BASE_URL}/users/get-users-by-ids`, data);
    }

    getLoggedInUser(): Observable<any> {
        return this.http.get(`${environments.API_BASE_URL}/users/get-loggedin-user`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }

    async isLoggedIn() {
        const response = await fetch(`${environments.API_BASE_URL}/users/is-loggedin`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (!response.ok) {
            throw new Error('Failed to check login status');
        }

        const result = await response.json();
        return result;
    }

    logoutUser() {
        return this.http.get(`${environments.API_BASE_URL}/users/logout-user`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }
}