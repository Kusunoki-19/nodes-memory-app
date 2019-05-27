import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayNodesComponent } from './display-nodes/display-nodes.component';
import { SelectNodesComponent } from './select-nodes/select-nodes.component';
import { CreateNodeComponent } from './create-node/create-node.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayNodesComponent,
    SelectNodesComponent,
    CreateNodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
