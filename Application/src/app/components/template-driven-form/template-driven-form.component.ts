import { MasterService } from './../../service/master.service';
import { State } from './../../model/state';
import { City } from './../../model/city';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  firstName: string;
  lastName: string;
  emailAddress: string;
  slectedGender: string;
  selectedState: number;
  stateList: Array<State>;
  selectedCity: number;
  cityList: Array<City>;
  address: string;
  @ViewChild('registrationForm') registrationForm: NgForm
  emailPattern: string;

  constructor(private masterService: MasterService) { }

  ngOnInit() {
    this.stateList = this.masterService.getStateList();
    this.cityList = this.masterService.getCityList();
    this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    this.selectedState = null;
    this.selectedCity = null;
  }

  stateChange(stateId: string) {
    this.cityList = this.masterService.getCityList().filter(f => f.Id.toString() === stateId);
    this.selectedCity = this.cityList[0].Value;
  }

  submitForm() {
    if (this.registrationForm.valid) {
      alert('Form Submit');
    } else {
      alert('Invalid Form');
    }
  }

  resetForm() {
    this.registrationForm.resetForm();
  }

}
