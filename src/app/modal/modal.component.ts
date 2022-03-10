import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  closeResult = '';
  @Input()  user :any;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    console.log(this.user.ID);
  }
  passBack() {
    this.passEntry.emit(this.user);
    this.activeModal.dismiss('cross click');
    }
}
