import { Component } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { CommonModule } from '@angular/common';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    PaginationModule,
    CommonModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  itemPerPage = 10;
  currentpage = 1;
  totalPages = 100;

  data = [
    {
      name : 'suriya',
      designation : "Developer",
      id : 1,
      number : 123456789
    },
    {
      name : 'deve',
      designation : "Assosiate Developer",
      id : 2,
      number : 123456789
    },
    {
      name : 'rohit',
      designation : "Tester",
      id : 3,
      number : 123456789
    },
    {
      name : 'arun',
      designation : "Developer",
      id : 4,
      number : 123456789
    },
    {
      name : 'hemanth',
      designation : "senior Developer",
      id : 5,
      number : 123456789
    }
  ]

  constructor(private dataService: DataSharingService) {}

  ngOnInit() {
    this.dataService.dataUpdated$.subscribe(newData => {
      this.data.push(newData);
    });
  }
  
}
