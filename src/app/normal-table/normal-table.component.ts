import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-normal-table',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './normal-table.component.html',
  styleUrl: './normal-table.component.scss'
})
export class NormalTableComponent {
  @Input() headers: string[] = [];
  @Input() data$!: Observable<any>;
  @Input() columnMapping: { [key: string]: string } = {};
}
