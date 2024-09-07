import { Component, EventEmitter, Output, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataSharingService } from '../data-sharing.service';


@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {

  form: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private dataService: DataSharingService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      id: ['',[ Validators.required, Validators.pattern('^[0-9]*$')]],
      designation: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  close() {
    this.bsModalRef.hide();
  }

  onSubmit() {
    if (this.form.valid) {
      this.dataService.updateData(this.form.value);
      this.close();
    }
  }

}
