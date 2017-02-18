import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-tooltip';

import { AppComponent } from './app.component';



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        TooltipModule
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
