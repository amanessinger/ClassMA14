import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { VoucherDetail, Voucher, BalanceAccount } from '../../../shared/index';

@Component({
  selector: 'app-voucher-details-list',
  templateUrl: './voucher-details-list.component.html',
  styleUrls: ['./voucher-details-list.component.css']
})
export class VoucherDetailsListComponent implements OnInit {
  @Input() details : VoucherDetail[];
  
  @Output() detailSelected : EventEmitter<VoucherDetail> = new EventEmitter();
  @Output() detailAdded : EventEmitter<VoucherDetail> = new EventEmitter();
  @Output() detailDeleted : EventEmitter<VoucherDetail> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    console.log(`received details ${this.details}`)
  }  
  
  selectDetail(d: VoucherDetail){
    this.detailSelected.emit(d);
  }

  addDetail(){
    var nd = new VoucherDetail()    
    this.detailAdded.emit(nd);
  }

  deleteDetail(d: VoucherDetail){
    this.detailDeleted.emit(d);
  }

}
