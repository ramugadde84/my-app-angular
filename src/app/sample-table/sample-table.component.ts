import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { DataService } from './service/data.service';
import { CommonModule } from '@angular/common';
import { NormalTableComponent } from '../normal-table/normal-table.component';

@Component({
  selector: 'app-sample-table',
  standalone: true,
  imports: [NormalTableComponent],
  templateUrl: './sample-table.component.html',
  styleUrl: './sample-table.component.scss'
})
export class SampleTableComponent implements OnInit {
  headers = ['ID', 'Title']; 
  columnMapping = { 'ID': 'id', 'Title': 'title' }; 
  dataSource$!: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataSource$ = this.dataService.getTableData();
    
  }
}
