import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vantage-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss'],
})
export class DeleteButtonComponent {
  canDelete = false;

  @Output() delete = new EventEmitter<boolean>();

  prepareForDelete() {
    this.canDelete = true;
  }

  cancel() {
    this.canDelete = false;
  }

  deleteBoard() {
    this.delete.emit(true);
    this.canDelete = false;
  }
}
