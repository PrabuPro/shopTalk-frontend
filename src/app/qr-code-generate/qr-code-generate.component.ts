import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ItemServiceProvider } from '../Items/itemService.service';
import { AlertPopupService } from '../utils/AlertPopupService';

@Component({
  selector: 'app-qr-code-generate',
  templateUrl: './qr-code-generate.component.html',
  styleUrls: ['./qr-code-generate.component.scss']
})
export class QrCodeGenerateComponent implements OnInit {
  mallId:number;
  mallList:Array<any>;
  qrVisible:boolean = false;

  constructor(
    private itemService: ItemServiceProvider,
    private alerts: AlertPopupService,
  ) { }

  ngOnInit() {
    this.getFormData()
  }

  getFormData() {
    forkJoin(
      this.itemService.getMallList().then(res => res.getData())
    ).subscribe(data => {
      this.mallList = data[0]
      console.log('this.mallList', this.mallList);
    })
  }

  selectMall(){
    this.qrVisible = true;
  }

}
