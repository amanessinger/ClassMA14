import { Component, OnInit } from "@angular/core";
import { Voucher } from "../../shared/model/model";
import {
  IClickCallback,
  VoucherService,
  GenericService
} from "./voucher.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"]
})
export class ServicesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  usingPromises() {
    function doAsyncTask(succeed: boolean): Promise<string> {
      return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
          console.log("Async Task Complete");
          if (succeed) {
            resolve(JSON.stringify({ Id: 1, Person: "Hugo Wolf" }));
          } else {
            reject("Outcome: Promise rejected");
          }
        }, 1000);
      });
    }

    doAsyncTask(true)
      .then(data =>
        console.log("Date received from Async Task", JSON.parse(data))
      )
      .catch(err => console.log("Err:", err));
  }

  usingFetch() {
    fetch("./assets/vouchers.json").then(data =>
      console.log("Data received from fetch", data)
    );
  }

  usingFetchAwait() {
    async function getAllVouchers() {
      let response = await fetch("./assets/vouchers.json");
      let voucher = await response.json();
      console.log("Data received using fetch - await");
      console.log(voucher);
    }

    getAllVouchers();
  }

  postFetch() {
    let body = {
      description: "Fetch API Post example",
      public: true,
      files: {
        "test.js": {
          content: "Abc"
        }
      }
    };

    fetch("https://api.github.com/gists", {
      method: "post",
      body: JSON.stringify(body)
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log("Created Gist");
      });
  }

  consumeService() {
    debugger;

    var service = new VoucherService();
    service.getVouchers().then((data: Voucher[]) => {
      console.log("data from VoucherService");
      console.log(data);
    });
  }

  consumeGenericService() {
    debugger;

    let res: GenericService<Voucher> = new GenericService<Voucher>(
      "/api/vouchers/"
    );

    res.getItems().done((data: Voucher[]) => {
      let vs: Voucher[] = data;
      console.log("Data received from Ressource");
      console.log(JSON.stringify(vs));
    });
  }
}
