import { Component, Input, OnInit } from "@angular/core";
import { NumberSymbol } from "@angular/common";

@Component({
  selector: "app-masonry-grid",
  templateUrl: "./masonry-grid.component.html",
  styleUrls: ["./masonry-grid.component.css"]
})
export class MasonryGridComponent implements OnInit {
  @Input() Columns: number;
  @Input() Margin: number;
  @Input() Width: number;
  private columnWidth: number;

  private columns: Column[] = [];
  private images: string[] = [
    "https://tse1.mm.bing.net/th?id=OIP.CJUfUTL4G36VndfyVxuiswAAAA&amp;w=145&amp;h=195&amp;c=7&amp;o=5&amp;dpr=2&amp;pid=1.7",
    "https://tse2.mm.bing.net/th?id=OIP.cSK_X1Q4mgIR_Ia9JDltUQHaHc&amp;w=194&amp;h=195&amp;c=7&amp;o=5&amp;dpr=2&amp;pid=1.7",
    "https://tse4.mm.bing.net/th?id=OIP.VaxpkH4WPbQNfgMZYTPGoQHaI3&amp;w=163&amp;h=195&amp;c=7&amp;o=5&amp;dpr=2&amp;pid=1.7",
    "https://tse1.mm.bing.net/th?id=OIP.TOimtbZDomXF5525UARBYwHaHa&amp;w=195&amp;h=195&amp;c=7&amp;o=5&amp;dpr=2&amp;pid=1.7",
    "https://tse1.mm.bing.net/th?id=OIP.ohQn-FE7OlAyKzTYl-BX_QHaKw&amp;w=135&amp;h=195&amp;c=7&amp;o=5&amp;dpr=2&amp;pid=1.7",
    "https://tse2.mm.bing.net/th?id=OIP.s_5Bv4TLCfez2RmiqnJ4vQHaFc&amp;w=266&amp;h=195&amp;c=7&amp;o=5&amp;dpr=2&amp;pid=1.7",
    "https://tse3.mm.bing.net/th?id=OIP.74QzQPtQj8N4zWKZTlLlcQHaFi&amp;w=262&amp;h=195&amp;c=7&amp;o=5&amp;dpr=2&amp;pid=1.7",
    "https://tse4.mm.bing.net/th?id=OIP.GTWox70HR9fis_6er758CgHaKl&amp;w=143&amp;h=204&amp;c=7&amp;o=5&amp;dpr=2&amp;pid=1.7",
    "https://tse2.mm.bing.net/th?id=OIP.f1OQN5DHFPcuG_EF64KMRQHaG9&amp;w=217&amp;h=204&amp;c=7&amp;o=5&amp;dpr=2&amp;pid=1.7",
    "https://tse2.mm.bing.net/th?id=OIP.uCIgoqMe70SOW22yCC4u_wHaJh&amp;w=159&amp;h=204&amp;c=7&amp;o=5&amp;dpr=2&amp;pid=1.7",
    "https://tse4.mm.bing.net/th?id=OIP.myGQ_LoPzF-X6eMxZHFmtwHaHa&amp;w=204&amp;h=204&amp;c=7&amp;o=5&amp;dpr=2&amp;pid=1.7",
    "https://tse4.mm.bing.net/th?id=OIP.GTXr6nyzK-vINIkjVewsNAHaJ1&amp;w=153&amp;h=204&amp;c=7&amp;o=5&amp;dpr=2&amp;pid=1.7",
    "https://tse2.mm.bing.net/th?id=OIP.GyEr-VPRtLbcnYJ3bKNMsgHaHC&amp;w=216&amp;h=204&amp;c=7&amp;o=5&amp;dpr=2&amp;pid=1.7",
    "https://tse1.mm.bing.net/th?id=OIP.Wm3PhgeZx52hgtykc2wAgwHaG8&amp;w=202&amp;h=188&amp;c=7&amp;o=5&amp;dpr=2&amp;pid=1.7"
  ];

  constructor() {
    this.columnWidth =
      (this.Width - this.Columns * this.Margin - this.Margin) / this.Columns;
  }

  ngOnInit(): void {
    // Initialize empty columns
    for (let i = 0; i < this.Columns; i++) {
      const c: Column = new Column();
      c.Images = [];
      this.columns.push(c);
    }

    // Assign images to columns
    let currentImageIndex = 0;
    this.images.map(image => {
      this.columns[currentImageIndex % this.Columns].Images.push(image);
      currentImageIndex++;
    });
  }
}

export class Column {
  public Images: string[];
}
