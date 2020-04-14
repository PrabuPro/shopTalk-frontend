import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { UserServiceProvider } from './user.service';
import { LoginComponent } from './login/login.component';



@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
    ],
    providers: [UserServiceProvider],
    entryComponents: [
        
    ]
})

export class userModule { }