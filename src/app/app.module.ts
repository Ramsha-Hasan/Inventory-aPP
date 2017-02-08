import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DepartmentComponent } from './department/department.component';
import { ImageComponent } from './image/image.component';
import { ListComponent } from './list/list.component';
import { PriceComponent } from './price/price.component';
import { RowComponent } from './row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DepartmentComponent,
    ImageComponent,
    ListComponent,
    PriceComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
