import { Component, OnInit, NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'mat-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.scss']
})
  @NgModule({
    exports: [
      MatToolbarModule
    ]
  })
export class CardLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
