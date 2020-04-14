import { Injectable } from '@angular/core';
import { HttpResponse, HttpParams } from '@angular/common/http';
import { GridResponse } from './GridResponse';

@Injectable()
export class ResponseBuilder {

    constructor() { }

    public build(res: HttpResponse<any>): GridResponse {
        let gridResponse;
        if (res.status == 200) {
            const data = res.body ? res.body : [];
            const total =  0;
            gridResponse = new GridResponse(data, total);
        } else {
            const error = res['error']['errors'][0]? res['error']['errors'][0] : [];
            gridResponse = new GridResponse([], 0, error);
        }
        return gridResponse;
    }

}
