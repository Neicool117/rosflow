import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodeGraphComponent } from './components/node-graph/node-graph.component';
import { NodeViewComponent } from './components/node-view/node-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularDraggableModule } from 'angular2-draggable';
import { NodeConnectionComponent } from './components/node-connection/node-connection.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeGraphComponent,
    NodeViewComponent,
    NodeConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
