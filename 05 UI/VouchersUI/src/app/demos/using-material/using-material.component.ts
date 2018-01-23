import { Http } from '@angular/http';
import {Component, ElementRef, ViewChild,  OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {MatTableModule, MatFormField, MatTableDataSource, MatTable} from '@angular/material';
import { Voucher } from '../../shared/index';

@Component({
  selector: 'app-using-material',
  templateUrl: './using-material.component.html',
  styleUrls: ['./using-material.component.css']
})
export class UsingMaterialComponent implements OnInit {
  
  vouchers: Voucher[];
  dataSource: MatTableDataSource<Voucher>;
  displayedColumns = ['ID', 'Text', 'Date', 'Amount'];

  constructor(private http:Http) {  }

  ngOnInit() {
    this.http.get('./assets/vouchers.json').toPromise().then(data => {
      this.vouchers = data.json();
      console.log(this.vouchers)
      this.dataSource = new MatTableDataSource(this.vouchers);
    })    
  }  

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}