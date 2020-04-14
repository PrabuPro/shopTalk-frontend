import { Component, OnInit } from '@angular/core';
import { ItemServiceProvider } from '../itemService.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AddItemComponent } from '../add-item/add-item.component';
import { AlertPopupService } from 'src/app/utils/AlertPopupService';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  displayedColumns: string[] = ['id', 'item', 'description','price', 'discount', 'menu'];
  dataSource;
  addItemModalReference: MatDialogRef<AddItemComponent>;
  itemState:string;
  itemId:number = null;

  constructor(
    private itemService:ItemServiceProvider,
    public dialog: MatDialog,
    private alerts: AlertPopupService,
  ) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.itemService.getItemList()
      .then(res => {
        console.log('res',res.getData());
        this.dataSource = res.getData();
      })
  }

  editItem(itemId){
    this.itemId = itemId;
    this.itemState = 'edit';
    this.itemModalOpen();
  }

  addItem(){
    this.itemState = 'add';
    this.itemModalOpen();
  }

  moreMenu(event) {
    // event.stopPropagation();
  }

  itemModalOpen() {
    const state = this.itemState;
    const itemId = this.itemId;
    this.addItemModalReference = this.dialog.open(AddItemComponent, {
      width: '500px',
      data: {state, itemId},
      disableClose: true
    });
    this.addItemModalReference.afterClosed().subscribe(result => {
      if (result != null) {
        this.getItems();
      }
    });
  }

  removeItem(itemId){
    this.itemService.removeItem(itemId)
      .then(res => {
        if(res != null){
          this.alerts.success("Successful", "Item removed successfully");
          this.getItems();
        }
      })

  }

}
