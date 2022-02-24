import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BoardService } from '../board.service';
import { Board } from '../board.model';
import { TaskDialogComponent } from '../dialogs/task-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../board.model';

@Component({
  selector: 'vantage-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @Input() board!: Board;

  constructor(private boardService: BoardService, private dialog: MatDialog) {}

  taskDrop(event: CdkDragDrop<string[]>): void {
    const { tasks, id } = this.board;
    if (!tasks || !id) {
      return;
    }
    moveItemInArray(tasks, event.previousIndex, event.currentIndex);
    this.boardService.updateTasks(id, tasks);
  }

  openDialog(task?: Task, idx?: number): void {
    const newTask = { label: 'purple' };
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: task
        ? { task: { ...task }, isNew: false, boardId: this.board.id, idx }
        : { task: newTask, isNew: true },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const { id, tasks } = this.board;
        if (!id || !tasks) {
          return;
        }
        if (result.isNew) {
          this.boardService.updateTasks(id, [...tasks, result.task]);
        } else {
          const update = this.board.tasks;
          update?.splice(result.idx, 1, result.task);
          this.boardService.updateTasks(id, tasks);
        }
      }
    });
  }

  handleDelete(): void {
    const { id } = this.board;
    if (id) {
      this.boardService.deleteBoard(id);
    }
  }
}
