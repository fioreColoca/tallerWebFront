import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-producto-component',
  templateUrl: './producto-component.component.html',
  styleUrls: ['./producto-component.component.css']
})

export class ProductoComponentComponent implements OnInit {
  @Input() dataEntrante:any;
  public image:string;
  constructor() { 

  }

  ngOnInit(): void {
   this.image = 'https://ae01.alicdn.com/kf/Hca48a71434f14df1b11965fcac8eb6327.jpg_q50.jpg';
   console.log('entrada: ', this.dataEntrante)
  }
}
