import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

export const cardConfig = {
  cards: [
    {
      id: 1,
      displayBox:false,
      branchId: 12,
      branchName: "test",
      displayBranchId: false,
      displayBranchName: false,
      width: 200,
      height: 150,
      backgroundColor: '#DC143C'
    },
    {
      id: 2,
      branchId: 12,
      displayBox:false,
      branchName: "test",
      displayBranchId: false,
      displayBranchName: false,
      width: 200,
      height: 150,
      backgroundColor: '#00FFFF'
    },
    {
      id: 3,
      branchId: 12,
      displayBox:false,
      branchName: "test",
      displayBranchId: false,
      displayBranchName: false,
      width: 200,
      height: 150,
      backgroundColor: 'green'
    },
    {
      id: 2,
      displayBox:true,
      branchId: 12,
      branchName: "California Milpitas",
      displayBranchId: true,
      displayBranchName: true,
      width: 300,
      height: 100,
      backgroundColor: 'white'
    },
    {
      id: 3,
      branchId: 12,
      displayBox:false,
      branchName: "test",
      displayBranchId: false,
      displayBranchName: false,
      width: 200,
      height: 150,
      backgroundColor: 'blue'
    },
    {
      id: 1,
      branchId: 13,
      displayBox:true,
      branchName: "California SanJose",
      displayBranchId: true,
      displayBranchName: true,
      width: 300,
      height: 100,
      backgroundColor: '#F8F8FF'
    },
    {
      id: 2,
      branchId: 12,
      displayBox:false,
      branchName: "test",
      displayBranchId: false,
      displayBranchName: false,
      width: 200,
      height: 150,
      backgroundColor: '#FFFAF0'
    },
    {
      id: 3,
      branchId: 12,
      displayBox:false,
      branchName: "test",
      displayBranchId: false,
      displayBranchName: false,
      width: 200,
      height: 200,
      backgroundColor: '#2F4F4F'
    },
    {
      id: 2,
      branchId: 12,
      displayBox:false,
      branchName: "test",
      displayBranchId: false,
      displayBranchName: false,
      width: 200,
      height: 100,
      backgroundColor: '#8B0000'
    },
    {
      id: 3,
      branchId: 12,
      branchName: "test",
      displayBox:false,
      displayBranchId: false,
      displayBranchName: false,
      width: 200,
      height: 300,
      backgroundColor: '#7FFF00'
    }
  ]
};


@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})
export class WidgetComponent {
  configuration = cardConfig;
}
