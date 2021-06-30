import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Tienda peluches';
  public listaDeProductos:Array<any> = []

  ngOnInit(): void{
  this.listaDeProductos = [
    {
    title: '♥peluche PRECIO',
    subtitle:'Peluche de zorrito',
    img:'https://ae01.alicdn.com/kf/Hca48a71434f14df1b11965fcac8eb6327.jpg_q50.jpg'
    },
    {
      title: '♥peluche 2 PRECIO',
      subtitle:'peluche conejito',
      img:'https://i.pinimg.com/originals/6e/65/6f/6e656f25915eec11e9395dcaefb1fad4.jpg',
      },
      {
        title: '♥peluche 3 PRECIO',
        subtitle:'peluche gatitos',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbmLIVHZy5FbM2OJPY-qWJKn2nYX6cozuzg&usqp=CAU'  
      }
  ]
}
}
