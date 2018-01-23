import { VoucherDetail } from "../../shared/model/model";

import * as moment from 'moment';
import * as $ from 'jquery';


export interface IClickCallback {
    (e: Event): void;
}

export interface IAjaxCallback {
    (data: any):void
}

export class VoucherService {
  getVouchers(): Promise<Voucher[]> {
    return new Promise<Voucher[]>((resolve, reject) => {
      fetch("/assets/vouchers.json")
        .then(data => {
          resolve(data.json());
        })
        .catch(err => {
          console.log("error calling service");
          console.log(err);
          return reject(err);
        });
    });
  }
}

export class GenericService<T extends IObject> {
    
            constructor(public url : string){}
    
            getItems() {
                var deferred = $.Deferred();
                $.ajax({
                    type: "GET",
                    url: this.url,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success(data: T[]) {
                        return deferred.resolve(data);
                    },
                    error(msg: any) {
                        console.log("error calling service");
                        console.log(msg);
                        return deferred.reject(msg);
                    }
                });
                return deferred;
            }
    
            getItem(id: number) {
                var deferred = $.Deferred();
                $.ajax({
                    type: "GET",
                    url: `${this.url}/${id}`,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success(data: T) {
                        return deferred.resolve(data);
                    },
                    error(msg: any) {
                        console.log("error calling service");
                        console.log(msg);
                        return deferred.reject(msg);
                    }
                });
                return deferred;
            }
    
            save(item: T, success: IAjaxCallback, error: IAjaxCallback) {
    
                let httpVerb = item.ID === 0 ? "POST" : "PUT";
    
                $.ajax({
                    type: httpVerb,
                    data: JSON.stringify(item),
                    url: this.url,
                    contentType: "application/json; charset=utf-8",
                    success: data => { success(data); },
                    error: data => { error(data); }
                });
            }
    
            delete(id: number, success: IAjaxCallback, error: IAjaxCallback) {
                $.ajax({
                    type: "DELETE",
                    url: this.url,
                    contentType: "application/json; charset=utf-8",
                    success: data => { success(data); },
                    error: data => { error(data); }
                });
            }
        }
    
        export class Voucher implements Voucher {
            ID: number;
            Text: string;
            Date: Date;
            Amount: number;
            Paid: boolean;
            Expense: boolean;
            Remark?: boolean;
            Details?: VoucherDetail[];
        }

        export interface IObject{
            ID: number;
        }