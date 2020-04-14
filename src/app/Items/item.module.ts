import { forwardRef ,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { ItemComponent } from './item/item.component';
import { ItemServiceProvider } from './itemService.service';
import { AddItemComponent } from './add-item/add-item.component';


@NgModule({
    declarations: [ItemComponent, AddItemComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
    ],
    providers: [ItemServiceProvider],
    entryComponents: [
        AddItemComponent
    ]
})

export class itemModule { }