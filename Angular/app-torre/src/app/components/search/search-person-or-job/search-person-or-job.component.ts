import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-search-person-or-job',
  templateUrl: './search-person-or-job.component.html',
  styleUrls: ['./search-person-or-job.component.css']
})
export class SearchPersonOrJobComponent implements OnInit {
  colorHoverPerson = "colorLightGray";
  colorHoverJob = "colorDarkGray";
  messagePlaceholder = "Buscar personas";
  //@Output() outputSelection=new EventEmitter();
  constructor() {
    //this.outputSelection.emit( "persona");
  }

  ngOnInit(): void {
  }

  changeJobOrPerson(boolean) {
    if (boolean) {
      this.colorHoverPerson = "colorLightGray";
      this.colorHoverJob = "colorDarkGray";
      this.messagePlaceholder = "Buscar personas";
      //this.outputSelection.emit("persona");
    } else {
      this.colorHoverJob = "colorLightGray";
      this.colorHoverPerson = "colorDarkGray";
      this.messagePlaceholder = "Buscar empleos";
      //this.outputSelection.emit("empleo");
    }
  }

}
