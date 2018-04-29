import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ImageService} from './shared/image.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
