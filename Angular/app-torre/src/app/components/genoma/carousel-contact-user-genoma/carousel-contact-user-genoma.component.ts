import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-contact-user-genoma',
  templateUrl: './carousel-contact-user-genoma.component.html',
  styleUrls: ['./carousel-contact-user-genoma.component.css']
})
export class CarouselContactUserGenomaComponent implements OnInit {

  @Input() dataGenomaUser;
  constructor() { }

  ngOnInit(): void {
  }

}
