import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';
// import { AuthService } from '../../../auth/AuthService';
import { AlertPopupService } from '../../utils/AlertPopupService';
import { Router } from '@angular/router';
import { UserServiceProvider } from '../user.service';
// import { OrganizationService } from 'src/app/organization-manager/organization.service';

declare var mobilePassword: any;
declare var loginUnlockCountdown: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    errors = [];
    mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;
    loginForm: FormGroup;
    rememberMe = false;
    userToken;
    resetValue;
    orgName;
    companyLogoPath;

    // create form control validations
    // email = new FormControl('', [Validators.required, Validators.email]);
    // password = new FormControl('', [Validators.required]);
    // rememberme = new FormControl('', []);
    constructor(
        fb: FormBuilder,
        private auth: UserServiceProvider,
        private alerts: AlertPopupService,
        private router: Router,
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        // private organizationService: OrganizationService
    ) {
        // this.getOrgAssets();
        this.loginForm = fb.group({
            'username': new FormControl('', [Validators.required]),
            // 'password': new FormControl('', [Validators.required])
            'password': new FormControl('', [Validators.maxLength(10), Validators.minLength(3), Validators.required]),
        });

        this.mobileQuery = media.matchMedia('(max-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnInit() {
        // mobilePassword.init();
    }

    // getOrgAssets() {
    //     const assetsResponse = this.organizationService.getOgranizationAssets();
    //     assetsResponse.then(res => {
    //         // console.log(res['data'][0]);
    //         this.orgName = res['data'][0]['orgName'];
    //         console.log("res of image");
    //         console.log(res);
    //         console.log(res['data'][0]['orgName']);
    //         if (res['data'][0]['companyLogoPath']) {
    //             this.companyLogoPath = res['data'][0]['companyLogoPath'];
    //         } else {
    //             this.companyLogoPath = this.organizationService.DEFAULT_ORG_ONBOARD_IMAGE;
    //         }


    //     });
    // }

    loginSubmit(loginForm: FormGroup) {
        this.errors = [];
        const loginResponse = this.auth.login(
            this.loginForm.get('username').value,
            this.loginForm.get('password').value,
            this.rememberMe);
        loginResponse.then(res => {
            const result = res;
            console.log('res',res);
            if (res != null) {
                if (res['non_field_errors'] == null){
                    this.router.navigate(['items']);
                } else {
                    this.alerts.error('Login Error', "Username or Password is wrong");
                    this.errors = res['errors'];
                    
                }
            }
        });
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    clearErrors() {
        this.errors = [];
    }

}
