import { InformacionService } from './services/informacion-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';

// Import para que no de errores el ngModel
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Service
import { DataService } from './services/data.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { ConvertirArrayPipe } from './pipes/convertir-array.pipe';
import { ModificarValuePipe } from './pipes/modificarvalue.pipe';
import { CarouselComponent } from './components/carousel/carousel.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ModificarValuePipe,
    ConvertirArrayPipe,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ DataService, InformacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
