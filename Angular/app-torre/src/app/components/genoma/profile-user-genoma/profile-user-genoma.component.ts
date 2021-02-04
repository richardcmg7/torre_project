import { TorreService } from './../../../service/torre.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-user-genoma',
  templateUrl: './profile-user-genoma.component.html',
  styleUrls: ['./profile-user-genoma.component.css']
})
export class ProfileUserGenomaComponent implements OnInit {

  constructor(private torreService: TorreService) {
    this.getDataGenomaUser();
  }

  ngOnInit(): void {
  }

  getDataGenomaUser() {
    let consult = "VWYZmewN";
    this.torreService.dataOpportunities(consult).subscribe(resp => {
      console.log(resp);
    });
  }

}
