import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "NgMasonryGrid";
  private browserWidth: number;

  ngOnInit() {
    this.browserWidth = window.innerWidth;
    console.log("BrowserWidth: " + this.browserWidth);
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.browserWidth = event.target.innerWidth;
    console.log("BrowserWidth: " + this.browserWidth);
  }
}
