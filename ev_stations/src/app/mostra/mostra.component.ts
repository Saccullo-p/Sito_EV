import { Component, Input, OnInit } from '@angular/core';
import { Station } from '../station.model';

@Component({
  selector: 'app-mostra',
  templateUrl: './mostra.component.html',
  styleUrls: ['./mostra.component.css']
})
export class MostraComponent implements OnInit {
  /** I dati vengono passati alla variabile 'listaDati' */
  @Input() listaDati : Station[]  = undefined!;
  constructor() { }

  ngOnInit(): void {
  }

}
