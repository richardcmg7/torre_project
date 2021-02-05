import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-footer-filter',
  templateUrl: './search-footer-filter.component.html',
  styleUrls: ['./search-footer-filter.component.css']
})
export class SearchFooterFilterComponent implements OnInit {

  activateJumbotronBig = false;
  @Input() selectionJobOrPerson;

  constructor() {
    this.selectionJobOrPerson = "";
  }

  ngOnInit(): void {
  }

  activateJumbotron(boolean) {
    this.activateJumbotronBig = boolean;
  }
}
