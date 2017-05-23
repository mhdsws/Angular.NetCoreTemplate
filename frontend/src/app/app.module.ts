import { NgModule }      from '@angular/core';
import { RouterModule }      from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule }      from '@angular/material';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';
import { MessagesComponent }  from './messages-component';
import { NewMessageComponent } from './new-message-component';
import { AppComponent }  from './app.component';
import { WebService } from './web.service';
import { NavComponent }  from './nav-component';
import { HomeComponent }  from './home-component';
import { RegisterComponent }  from './register-component';
var routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'messages',
  component: MessagesComponent
},{
  path: 'messages/:ownerName',
  component: MessagesComponent
},{
  path: 'register',
  component: RegisterComponent
}];

@NgModule({
  imports:      [ BrowserModule, MaterialModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent, RegisterComponent ],
  providers: [ WebService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
