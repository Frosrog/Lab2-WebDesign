import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AccidentsService } from './accidents.service';

import { AppComponent } from './app.component';
import { TitleComponent } from './Components/title/title.component';
import { DatepickerComponent } from './Components/datepicker/datepicker.component';
import { ProvincesComponent } from './Components/provinces/provinces.component';
import { SearchComponent } from './Components/search/search.component';
import { ChartComponent } from './Components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DatepickerComponent,
    ProvincesComponent,
    SearchComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AccidentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
