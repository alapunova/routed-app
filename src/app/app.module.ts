import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { NetWorthComponent } from './net-worth/net-worth.component';
import { InsightsComponent } from './insights/insights.component';
import { AssetViewComponent } from './net-worth/asset-view/asset-view.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MarketMoversComponent,
    CashFlowComponent,
    NetWorthComponent,
    InsightsComponent,
    AssetViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // is needed for Forms
    HttpClientModule // is needed for Service
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
