import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MasonryGridComponent } from "./masonry-grid.component";

@NgModule({
  declarations: [AppComponent, MasonryGridComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
