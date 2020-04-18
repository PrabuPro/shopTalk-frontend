import { MainNavComponent } from './main-nav/main-nav.component';
import { ItemComponent } from './Items/item/item.component';
import { LoginComponent } from './user/login/login.component';
import { QrCodeGenerateComponent } from './qr-code-generate/qr-code-generate.component';

export const appRoutes = [
    {
        path: '',
        component: MainNavComponent,
        data: { breadcrumb: 'Home' },
        children: [
            {
                path: 'items', component: ItemComponent,
            },
            {
                path: 'generate-qr', component: QrCodeGenerateComponent,
            },
           
        ]
    },

    {
        path: 'login', component: LoginComponent,
        // children: [
        //     { path: '', component: LoginComponent, canActivate: [LoginGuard] },
        //     { path: 'forgot-password', component: ForgotPasswordComponent },
        //     { path: 'reset-password-adminmodify', component: ChangePasswordAdminModifyComponent },
        //     { path: 'reset-password/:token', component: ResetPasswordRedirectComponent },
        //     { path: 'user-invitation/:token', component: UserInvitationComponent },
        //     {
        //         path: 'reset-password-match/:token', component: ResetPasswordComponent, canActivate: [LoginGuard]
        //     },
        //     {
        //         path: 'reset-password-match-email/:token', component: ResetPasswordEmailComponent, canActivate: [LoginGuard]
        //     },
        //     { path: 'invalid-token', component: InvalidTokenComponent },
        //     { path: 'expired-token', component: ExpiredTokenComponent }
        // ]
    },
    // { path: 'access-denied', component: AccessDeniedPageComponent },
    // { path: '404', component: ErrorNotFoundComponent },
    // { path: '**', redirectTo: '/404' },

];