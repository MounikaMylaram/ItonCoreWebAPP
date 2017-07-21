import {Component} from '@angular/core';

@Component({
  selector: 'iton-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css'],
  inputs: ['isRequired', 'min-len', 'max-len', 'pattern', 'isDisabled', 'value']
})

export class InputBoxComponent{ }