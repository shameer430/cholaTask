import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgFor } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';
import { TableComponent } from '../table/table.component';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  modalRef?: BsModalRef;
  

  constructor(
    private modalService: BsModalService,
    private dataService: DataSharingService
  ) {}

  openModal() {
    this.modalRef = this.modalService.show(PopupComponent, {
      class: 'modal-lg'
    });
  }
}
