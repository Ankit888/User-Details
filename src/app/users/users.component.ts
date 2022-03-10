import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import * as packageInfo from '../../../data/data.json';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  headers:any = ["ID", "Name", "Skill","Location"];
  flag = false;
  version = packageInfo;
   version1:any = this.version.users;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }
  openModal(value:any) : void {
    console.log(value);
    const modalRef =  this.modalService.open(ModalComponent);
    modalRef.componentInstance.user = value;
  }


  newData:any;
  getUser(value:any){
    this.flag= true;
    
    this.newData = value;
 
    console.log( this.newData);
 
  }

}
