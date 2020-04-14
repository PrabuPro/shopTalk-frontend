import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
// import { ActionFooterComponent } from './action-footer/action-footer.component';
import { AlertPopupService } from './AlertPopupService';
import { ResponseBuilder } from './ResponseBuilder';
import { PasswordValidatorService } from './PasswordValidatorService';
import { ArraySortPipe } from './sort.pipe';
import { FilterData } from './filterData.pipe';

@NgModule({
  declarations: [ArraySortPipe, FilterData],
  exports: [ArraySortPipe, FilterData],
  imports: [
    CommonModule,
    BrowserAnimationsModule,

  ],
  providers: [AlertPopupService, ResponseBuilder, PasswordValidatorService]
})
export class UtilsModule { }
