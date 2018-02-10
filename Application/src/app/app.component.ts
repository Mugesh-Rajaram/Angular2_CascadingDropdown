import { Component } from '@angular/core';
import { City } from './model/city';
import { Country } from './model/country';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MasterService]
})
export class AppComponent {
  title = 'app';
  selectedCountry: Country = new Country('India', '1');
  countryList: Array<Country>;
  selectedCity: City = new City('Namakkal', '1');
  cityList: Array<City>;

  constructor(private masterService: MasterService) {
    this.countryList = this.masterService.getCountryList();
    this.cityList = this.masterService.getCityList();
  }

  countryChange(countryId) {
    this.cityList = [];
    this.cityList = this.masterService.getCityList().filter(f => f.id === countryId);
    console.log(this.cityList);
  }
}
