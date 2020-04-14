import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { itemModule } from './Items/item.module';
import { UtilsModule } from './utils/utils.module';
import { HttpClientModule } from '@angular/common/http';
import { userModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    itemModule,
    userModule,
    UtilsModule, 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [UtilsModule],
})
export class AppModule { }
