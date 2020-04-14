import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ResponseBuilder } from '../utils/ResponseBuilder';
import { GridResponse } from '../utils/GridResponse';
import { UserServiceProvider } from '../user/user.service';


@Injectable()
export class ItemServiceProvider {

    private baseUrl: string = "http://127.0.0.1:8000/";

    private getItemListUrl = 'api/items/';
    private getCategoryListUrl = 'api/categories/';
    private getMallListUrl = 'api/malls/';


    constructor(
        private http: HttpClient,
        private resBuilder: ResponseBuilder,
        private userService: UserServiceProvider
    ) {
    }

    private getAPIHeaders() {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + this.userService.getToken()
        });
    }

    public getItemList(): Promise<GridResponse> {
        return this.http
            .get(this.baseUrl + this.getItemListUrl,
                {
                    headers: this.getAPIHeaders(),
                    observe: 'response'
                }).toPromise().then(res => {
                    return this.resBuilder.build(res);
                }, err => {
                    return this.resBuilder.build(err);
                });
    }

    public getCategoryList(): Promise<GridResponse> {
        return this.http
            .get(this.baseUrl + this.getCategoryListUrl,
                {
                    headers: this.getAPIHeaders(),
                    observe: 'response'
                }).toPromise().then(res => {
                    return this.resBuilder.build(res);
                }, err => {
                    return this.resBuilder.build(err);
                });
    }

    public getMallList(): Promise<GridResponse> {
        return this.http
            .get(this.baseUrl + this.getMallListUrl,
                {
                    headers: this.getAPIHeaders(),
                    observe: 'response'
                }).toPromise().then(res => {
                    return this.resBuilder.build(res);
                }, err => {
                    return this.resBuilder.build(err);
                });
    }

    public getItemData(itemId): Promise<GridResponse> {
        return this.http
            .get(this.baseUrl + this.getItemListUrl + itemId + '/',
                {
                    headers: this.getAPIHeaders(),
                    observe: 'response'
                }).toPromise().then(res => {
                    return this.resBuilder.build(res);
                }, err => {
                    return this.resBuilder.build(err);
                });
    }

    public addItemList(itemData): Promise<GridResponse> {
        return this.http
            .post(this.baseUrl + this.getItemListUrl, itemData,
                {
                    headers: this.getAPIHeaders(),
                    observe: 'response'
                }).toPromise().then(res => {
                    return res;
                }, err => {
                    return err;
                });
    }
    public updateItem(itemId,itemData): Promise<GridResponse> {
        return this.http
            .put(this.baseUrl + this.getItemListUrl + itemId + '/', itemData,
                {
                    headers: this.getAPIHeaders(),
                    observe: 'response'
                }).toPromise().then(res => {
                    return res;
                }, err => {
                    return err;
                });
    }

    public removeItem(itemId): Promise<GridResponse> {
        return this.http
            .delete(this.baseUrl + this.getItemListUrl + itemId + '/', 
                {
                    headers: this.getAPIHeaders(),
                    observe: 'response'
                }).toPromise().then(res => {
                    return res;
                }, err => {
                    return err;
                });
    }

}