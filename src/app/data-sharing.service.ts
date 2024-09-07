import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private dataUpdated = new Subject<any>();
  dataUpdated$ = this.dataUpdated.asObservable();

  updateData(newData: any) {
    this.dataUpdated.next(newData);
  }
}
