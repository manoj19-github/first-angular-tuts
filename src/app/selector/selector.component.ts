import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
})
export class SelectorComponent {
  selectedRadioButtonValue: string = 'All';
  @Output()
  filteredRadioButtonSelectionChanged: EventEmitter<string> =
    new EventEmitter<string>();
  onRadioButtonSelectionChanged() {
    this.filteredRadioButtonSelectionChanged.emit(
      this.selectedRadioButtonValue
    );
    console.log('selectedRadioButtonValue : ', this.selectedRadioButtonValue);
  }
}
