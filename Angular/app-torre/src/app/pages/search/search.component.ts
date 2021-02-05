import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  dataSelectText;
  jsonUserCard;
  jsonJodCard;
  constructor() { }

  ngOnInit(): void {
  }

  dataSelectButton(data) {
    this.dataSelectText = data;
  }

  infortionJobConsult(information) {
    this.jsonJodCard = information;
  }

  infortionUserConsult(information) {
    this.jsonUserCard = information;
  }

}
