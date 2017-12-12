import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';

// Import para que no de errores el ngModel
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Service
import { DataService } from './services/data.service';
import { LoginService } from './services/login.service';



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { ConvertirArrayPipe } from './pipes/convertir-array.pipe';
import { ModificarValuePipe } from './pipes/modificarvalue.pipe';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { APP_ROUTING } from './app.routes';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ModificarValuePipe,
    ConvertirArrayPipe,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [ DataService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
