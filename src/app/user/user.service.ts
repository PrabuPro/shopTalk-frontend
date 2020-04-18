import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ResponseBuilder } from '../utils/ResponseBuilder';
import { GridResponse } from '../utils/GridResponse';

export const TOKEN_NAME = 'token';


@Injectable()
export class UserServiceProvider {

    private baseUrl: string = "http://127.0.0.1:8000/";

    private loginUrl = 'api/auth/login';
    private logoutUrl = 'api/auth/logout/';


    constructor(
        private http: HttpClient,
        private resBuilder: ResponseBuilder
    ) {
    }

    private getAPIHeaders() {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + this.getToken()
        });
    }

    private getAPILoginHeaders() {
        return new HttpHeaders({
            'Content-Type': 'application/json'
        });
    }

    public login(username: string, password: string, remember: boolean): Promise<JSON> {
        this.removeToken();
        const user = {
            'username': username,
            'password': password,
        };

        return this.http
            .post(this.baseUrl + this.loginUrl, JSON.stringify(user), 
            {
                headers: this.getAPILoginHeaders(),
                observe: 'response'
            })
            .toPromise().then(res => {
                console.log('login',res);
                const loginData = res['body'];
                if(loginData != 0){
                    this.setToken(loginData['token']);
                }
                return res.body;
            }, errResponse => {
                return errResponse.error;
            });
    }

    public removeToken() {
        return localStorage.removeItem(TOKEN_NAME);
    }

    public getToken(): string {
        return localStorage.getItem(TOKEN_NAME);
    }

    public setToken(token: string) {
        return localStorage.setItem(TOKEN_NAME, token);
    }

    public logout(): Promise<JSON> {
        return this.http
            .post(this.baseUrl + this.logoutUrl,[],
                {
                    headers: this.getAPIHeaders(),
                    observe: 'response'
                })
            .toPromise().then(res => {
                this.removeToken();
                return res.body;
            }, errResponse => {
                return errResponse.error;
            });
    }

}