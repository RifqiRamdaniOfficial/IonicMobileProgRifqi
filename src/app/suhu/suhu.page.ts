import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suhu',
  templateUrl: './suhu.page.html',
  styleUrls: ['./suhu.page.scss'],
})
export class SuhuPage {
  inputTemperature: number = 0;
  selectedFromUnit: string = '';
  selectedToUnit: string = '';
  result: number = 0;

  convert() {
    if (
      this.selectedFromUnit === 'celsius' &&
      this.selectedToUnit === 'fahrenheit'
    ) {
      this.result = (this.inputTemperature * 9) / 5 + 32;
    } else if (
      this.selectedFromUnit === 'celsius' &&
      this.selectedToUnit === 'kelvin'
    ) {
      this.result = this.inputTemperature + 273.15;
    } else if (
      this.selectedFromUnit === 'fahrenheit' &&
      this.selectedToUnit === 'celsius'
    ) {
      this.result = (this.inputTemperature - 32) * (5 / 9);
    } else if (
      this.selectedFromUnit === 'fahrenheit' &&
      this.selectedToUnit === 'kelvin'
    ) {
      this.result = (this.inputTemperature - 32) * (5 / 9) + 273.15;
    } else if (
      this.selectedFromUnit === 'kelvin' &&
      this.selectedToUnit === 'celsius'
    ) {
      this.result = this.inputTemperature - 273.15;
    } else if (
      this.selectedFromUnit === 'kelvin' &&
      this.selectedToUnit === 'fahrenheit'
    ) {
      this.result = ((this.inputTemperature - 273.15) * 9) / 5 + 32;
    }
  }
}
