import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  dataSelectText;
  constructor() { }

  ngOnInit(): void {
  }

  dataSelectButton(data) {
    this.dataSelectText = data;
  }

}
