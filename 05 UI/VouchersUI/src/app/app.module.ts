import { HttpModule } from '@angular/http';
import { MatchHeightDirective } from './shared';
import { NavbarComponent } from './shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountsComponent } from './accounts/accounts.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoucherComponent } from './vouchers/voucher/voucher.component';
import { VouchersListComponent } from './vouchers/vouchers-list.component';
import { VouchersService } from './vouchers/voucher.service';
import { CSSBindingComponent } from './demos/cssbinding/binding.component';
import { UsingBootstrapComponent } from './demos/using-bootstrap/using-bootstrap.component';
import { UsingMaterialComponent } from './demos/using-material/using-material.component';
import { UsingThirdpartyComponent } from './demos/using-thirdparty/using-thirdparty.component';
import { MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AdminComponent } from './admin/admin.component';
import { RouteGuard } from './route.guard.service';
import { VoucherDetailComponent } from './vouchers/voucher/voucher-detail/voucher-detail.component';
import { VoucherDetailsListComponent } from './vouchers/voucher/voucher-details-list/voucher-details-list.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe)

@NgModule({
  declarations: [
    AdminComponent,
    AppComponent,
    NavbarComponent,
    MatchHeightDirective,
    VouchersListComponent,
    AccountsComponent,
    VoucherComponent,
    VoucherDetailComponent,
    VoucherDetailsListComponent,
    DemosComponent, 
    CSSBindingComponent,
    UsingBootstrapComponent, 
    UsingMaterialComponent, 
    UsingThirdpartyComponent    
  ],
  imports: [
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),    
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    NgxChartsModule
  ],
  providers: [
    VouchersService,
    {provide: LOCALE_ID, useValue: "de-DE"},
    RouteGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
