import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListItems } from '../../interface/IListItems.interface';

@Component({
  selector: 'app-input-list-item',
  standalone: true,
  imports: [],
  templateUrl: './input-list-item.component.html',
  styleUrl: './input-list-item.component.scss'
})
export class InputListItemComponent {
  @Input ({ required: true }) public inputListItems: IListItems[] = [];
  @Output() public outuputUpdateItemCheckbox = new EventEmitter<{ checked: boolean; id: string;}>();

  public updateItemCheckbox (id: string, checked: boolean) {
  return this.outuputUpdateItemCheckbox.emit({ id, checked });
  }
  @Output() public outuputUpdateItemText = new EventEmitter<{ id: string; value: string; }>();

  public updateItemText (id: string, value: string) {
  return this.outuputUpdateItemText.emit({ id, value });
  }

  @Output() public outuputDeleteItem = new EventEmitter<string>();

  public deleteItem (id: string) {
  return this.outuputDeleteItem.emit(id);
  }
}
