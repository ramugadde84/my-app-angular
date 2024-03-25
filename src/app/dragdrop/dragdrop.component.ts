import { Component } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dragdrop',
  standalone: true,
  imports: [CdkDropList, CdkDrag, CommonModule],
  templateUrl: './dragdrop.component.html',
  styleUrl: './dragdrop.component.scss'
})
export class DragdropComponent {
  leftItems = ['Item 1', 'Item 2', 'Item 3'];
  rightItems: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // Reordering within the same list
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Moving from left to right
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
