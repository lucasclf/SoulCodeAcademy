import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  myColor = "orange";
  color= "";

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color1: string;

  valor="";

  constructor() { }

  ngOnInit(): void {
  }

}
