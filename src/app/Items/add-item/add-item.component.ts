import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ItemServiceProvider } from '../itemService.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertPopupService } from 'src/app/utils/AlertPopupService';
import { Item } from './item.model';
import { forkJoin } from 'rxjs';


export interface DialogData {
  itemId;
  state;
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  itemId:number;
  state:string;
  addItemForm: FormGroup;
  itemModal :Item = new Item();
  categoryList:Array<any>;
  mallList:Array<any>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<AddItemComponent>,
    private quoteService: ItemServiceProvider,
    private fb: FormBuilder,
    private alerts: AlertPopupService,
    private itemService: ItemServiceProvider,
  ) { }

  ngOnInit() {
    this.setState();
    this.createForm();
    this.switchState();
  }

  setState(){
    this.itemId = this.data.itemId;
    this.state = this.data.state;
  }

  switchState(){
    this.getFormData();
    if (this.state == 'add') {
      
    } else if(this.state == 'edit'){
      this.getItemData()
    }
  }

  getFormData(){
    forkJoin(
      this.itemService.getCategoryList().then(res => res.getData()),
      this.itemService.getMallList().then(res => res.getData())
    ).subscribe(data => {
      this.categoryList = data[0];
      this.mallList = data[1]
      console.log('this.categoryList', this.categoryList);
      console.log('this.mallList', this.mallList);
    })
  }

  getItemData(){
    this.itemService.getItemData(this.itemId)
      .then(res => {
        console.log('res', res);
        const result = res.getData();
        console.log('result', result);
        if(result !=  null){
          const tempItem = new Item();
          tempItem.create(result);
          this.itemModal = tempItem;
        }
      })
  }

  createForm() {
    this.addItemForm = this.fb.group({
      name : ['', [Validators.required]],
      description: ['', []],
      price: ['', [Validators.required]],
      discount: ['', []],
      category: ['',[Validators.required]],
      mall: ['',[Validators.required]],
    })
  }

  onClose() {
    this.dialogRef.close();
  }

  nameChange(){
    console.log(this.itemModal.name);
  }

  addItem(){
    const itemData = {
      name: this.itemModal.name,
      description: this.itemModal.description,
      price: this.itemModal.price,
      discount: this.itemModal.discount,
      categoryId: this.itemModal.categoryId,
      mallId: this.itemModal.mallId
    }
    console.log('item', this.itemModal.name);
    console.log('this.itemModal.getAddItemObject', itemData);
    this.itemService.addItemList(itemData)
      .then(res => {
        const result = res;
        if(result != null){
          this.alerts.success('Success', 'Item Added Successfully!');
          this.dialogRef.close({data:1});
        } else {
          this.alerts.error("error", "Something went wrong!")
        }
      })
  }

  updateItem(){
    const itemData = {
      id:this.itemModal.id,
      name: this.itemModal.name,
      description: this.itemModal.description,
      price: this.itemModal.price,
      discount: this.itemModal.discount
    }
    console.log('item', this.itemModal.name);
    console.log('this.itemModal.getAddItemObject', itemData);
    this.itemService.updateItem(this.itemId,itemData)
      .then(res => {
        const result = res;
        if (result != null) {
          this.alerts.success('Success', 'Item Updated Successfully!');
          this.dialogRef.close({ data: 1 });
        } else {
          this.alerts.error("error", "Something went wrong!")
        }
      })
    
  }

}
