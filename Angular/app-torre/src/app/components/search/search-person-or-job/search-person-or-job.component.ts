import { TorreService } from './../../../service/torre.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-person-or-job',
  templateUrl: './search-person-or-job.component.html',
  styleUrls: ['./search-person-or-job.component.css']
})
export class SearchPersonOrJobComponent implements OnInit {
  colorHoverPerson = "colorLightGray";
  colorHoverJob = "colorDarkGray";
  messagePlaceholder = "Buscar personas por cargo";
  messagePerson = "persona";
  messageJob = "empleo";
  userOrJobCard = false;
  informationConsult;
  validateSendInput = true;
  dataUsersConsult;
  dataJobConsult;
  @Output() outputSelection = new EventEmitter();


  constructor(private torreService:TorreService,public router: Router) { }

  ngOnInit(): void {
    this.outputSelection.emit(this.messagePerson);
  }

  changeJobOrPerson(boolean) {
    if (boolean) {
      this.colorHoverPerson = "colorLightGray";
      this.colorHoverJob = "colorDarkGray";
      this.messagePlaceholder = "Buscar personas por cargo";
      this.validateSendInput = true;
      this.outputSelection.emit(this.messagePerson);
    } else {
      this.colorHoverJob = "colorLightGray";
      this.colorHoverPerson = "colorDarkGray";
      this.messagePlaceholder = "Buscar empleos";
      this.validateSendInput = false;
      this.outputSelection.emit(this.messageJob);
    }
  }

  definePeopleOrJod(validate) {
    if (validate) {
      this.searchPeoples();

    } else {
      this.searchJob();
    }
  }

  searchPeoples() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor',
    });
    Swal.showLoading();

    if (this.informationConsult.length == 0) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        text: 'Debe ingresar información al campo antes de consultar',
        showConfirmButton: false,
        timer: 1500
      });
      Swal.close();
      return;
    }
    this.torreService.searchPeople(this.informationConsult).subscribe(resp => {
      Swal.close();
      this.dataUsersConsult = resp;
      console.log(this.dataUsersConsult);
      this.userOrJobCard = true;
    },
    error => {
      Swal.close();
      Swal.fire({
        title: "Error",
        icon: 'error',
        text: "Error al momento de realizar la consulta",
      });
    });


  }

   searchJob() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor',
    });
    Swal.showLoading();

    if (this.informationConsult.length == 0) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        text: 'Debe ingresar información al campo antes de consultar',
        showConfirmButton: false,
        timer: 1500
      });
      Swal.close();
      return;
    }
    this.torreService.searchOpo(this.informationConsult).subscribe(resp => {
      Swal.close();

      this.dataJobConsult = resp;
      console.log(this.dataJobConsult);

    },error => {
      Swal.close();
      Swal.fire({
        title: "Error",
        icon: 'error',
        text: "Error al momento de realizar la consulta",
      });
    });
   }

  searchOtherPeoples() {
    this.dataUsersConsult = null;
    this.userOrJobCard = false;
  }
}
