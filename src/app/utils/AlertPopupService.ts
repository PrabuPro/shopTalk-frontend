import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable()
export class AlertPopupService {

    constructor() { }

    public error(title: string, message: string) {
        Swal.fire({
            title: title,
            text: message,
            type: 'error',
            buttonsStyling: false,
            customClass: 'go-danger-popup',
            confirmButtonText: 'Done',
            showCancelButton: false,
            timer: 3000,
            confirmButtonClass: 'btn btn-danger'
        });

    }

    public warning(title: string, message: string) {
        Swal.fire({
            title: title,
            text: message,
            imageUrl: '../../../assets/images/popups/swal-warning.png',
            imageWidth: 63,
            imageHeight: 55,
            reverseButtons: true,
            buttonsStyling: false,
            customClass: 'go-danger-popup',
            confirmButtonText: 'Deactivate',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-danger ml-3',
            cancelButtonClass: 'btn btn-secondary'
        });

    }

    public success(title: string, message: string) {
        Swal.fire({
            title: title,
            text: message,
            type: 'success',
            buttonsStyling: false,
            customClass: 'go-success-popup',
            confirmButtonText: 'Done',
            showCancelButton: false,
            timer: 3000,
            confirmButtonClass: 'btn btn-success'
        });
    }

    public confirm(title: string, message: string, confirmBtnText: string, callback: Function, action: string = null) {
        Swal.fire({
            position: 'center',
            title: title,
            text: message,
            type: (action === 'activate') ? 'success' : 'warning',
            reverseButtons: true,
            buttonsStyling: false,
            showCancelButton: true,
            confirmButtonText: confirmBtnText,
            customClass: (action === 'activate') ? 'go-success-popup' : 'go-danger-popup',
            confirmButtonClass: (action === 'activate') ? 'btn btn-success ml-3' : 'btn btn-danger ml-3',
            cancelButtonClass: 'btn btn-secondary'
        }).then((result) => {
            if (result.value) {
                callback();
            }
        });
    }

    public confirmWithCancelCallback(
        title: string,
        message: string,
        confirmBtnText: string,
        callback: Function,
        cancelCallback: Function,
        action: string = null) {
        Swal.fire({
            position: 'center',
            title: title,
            text: message,
            type: (action === 'activate') ? 'success' : 'warning',
            reverseButtons: true,
            buttonsStyling: false,
            showCancelButton: true,
            confirmButtonText: confirmBtnText,
            customClass: (action === 'activate') ? 'go-success-popup' : 'go-danger-popup',
            confirmButtonClass: (action === 'activate') ? 'btn btn-success ml-3' : 'btn btn-danger ml-3',
            cancelButtonClass: 'btn btn-secondary'
        }).then((result) => {
            if (result.value) {
                callback();
            } else {
                cancelCallback();
            }
        });
    }

    public confirmWithCancelCallbackReturn(title: string, message: string, confirmBtnText: string) {
        return Swal.fire({
            position: 'center',
            title: title,
            text: message,
            background: '#ffffff',
            showCancelButton: true,
            reverseButtons: true,
            buttonsStyling: false,
            cancelButtonClass: 'btn btn-secondary',
            confirmButtonClass: 'btn btn-primary ml-3',
            confirmButtonText: confirmBtnText
        }).then((result) => {

            return new Promise(function (resolve, reject) {
                if (result.value) {
                    resolve(true);
                } else {
                    reject(false);
                }
            });

        });
    }

}
